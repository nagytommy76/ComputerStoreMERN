import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, EMAIL_SECRET } from '../../config/endpoints.config'
import { validationResult } from 'express-validator'

import NodeMailer from '../../config/Mail/nodemailer'

const nodemailer = new NodeMailer()

export const registerUserController = async (req: Request, res: Response) => {
   const userName = req.body.userName
   const email = req.body.email
   const firstPass = req.body.firstPassword
   try {
      await User.register(email, userName, firstPass)
   } catch (error: any) {
      return res.status(404).json(ErrorResponse(true, error.message))
   }

   const validationErrors = validationResult(req)
   if (!validationErrors.isEmpty()) return res.status(422).json({ errors: validationErrors.array() })

   try {
      const hashedPass = await bcrypt.hash(firstPass, 10)
      const emailToken = jwt.sign({ userName, email }, EMAIL_SECRET, {
         expiresIn: `${nodemailer.EMAIL_TOKEN_EXPIRESIN}min`,
      })
      await User.create({
         userName,
         password: hashedPass,
         email,
      })
      await nodemailer.sendEmailUserRegistersAndResendEmail(
         email,
         'Email cím regisztrálása',
         userName,
         emailToken
      )
      res.status(201).json({
         message:
            'A regisztráció sikeres volt - Az email címedre megküldtük a regisztráció megerősítéhez szükséges kódot!',
      })
   } catch (error) {
      res.status(500).json({ error })
   }
}

export const loginUserController = async (req: Request, res: Response) => {
   const userName = req.body.email
   try {
      const user = await User.login(userName)
      if (await bcrypt.compare(req.body.password, user.password)) {
         if (!user.isEmailConfirmed)
            return res
               .status(403)
               .json(ErrorResponse(true, 'Az email címed még nem lett regsiztrálva! Kérlek erősítsd meg!'))
         const accessToken = generateTokens(
            user._id,
            user.userName,
            user.isAdmin,
            user.email,
            ACCESS_TOKEN_SECRET
         )
         const refreshToken = generateTokens(
            user._id,
            user.userName,
            user.isAdmin,
            user.email,
            REFRESH_TOKEN_SECRET,
            '2day'
         )
         // Itt a lejárati időnek ugyan annyinak kéne lennie mint a tokenenknek
         res.cookie('refreshToken', refreshToken, {
            httpOnly: true, // only by web server
            secure: true, //https
            sameSite: 'none', // majd none-re állítani: ugyan azon oldalra érvényes csak
            maxAge: 2 * 24 * 60 * 60 * 1000, // 1 nap * 24 óra * 1óra * 1 perc
         })
            .status(200)
            .json({
               accessToken,
               userId: user._id,
               userName: user.userName,
               isAdmin: user.isAdmin,
            })
      } else res.status(403).json(ErrorResponse(true, 'Helytelen jelszó', 'password'))
   } catch (error: any) {
      res.status(404).json(ErrorResponse(true, error.message))
   }
}

export const checkTokensValidityController = (req: Request, res: Response) => {
   // Ide a refresh token kell
   const refreshToken = req.cookies?.refreshToken as string | undefined
   console.log(req.cookies)
   if (!refreshToken) return res.sendStatus(401)
   try {
      jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded: any) => {
         if (err) return res.status(403).json({ errorMessage: 'refresh token expired' })
         const newAccessToken = generateTokens(
            decoded._id,
            decoded.userName,
            decoded.isAdmin,
            decoded.email,
            ACCESS_TOKEN_SECRET
         )
         res.status(200).json(newAccessToken)
      })
   } catch (error) {
      res.status(500).json(error)
   }
}

// EZEKET ÁTTENNI KÜLÖN FILE-BA!!!!!!!!!!
/**
 *
 * @param user UserTypes
 * @param TOKEN_SECRET string
 * @param expiresIn string
 * @returns an accessToken or refreshToken with the passed in user's data
 */
const generateTokens = (
   userId: string,
   userName: string,
   isAdmin: boolean,
   email: string,
   TOKEN_SECRET: string,
   expiresIn: string = '15s'
) => {
   return jwt.sign({ _id: userId, userName, isAdmin, email }, TOKEN_SECRET, { expiresIn })
}

export const ErrorResponse = (hasError: boolean, errorMessage: string = '', errorType: string = 'email') => {
   return {
      errorType,
      hasError,
      errorMessage,
   }
}
