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

   const checkUserRegistered = await User.findOne({ email, userName })
   if (checkUserRegistered != null) return res.status(404).json(ErrorResponse(true, 'Az email cím már regisztrálva lett'))

   const validationErrors = validationResult(req)
   if (!validationErrors.isEmpty()) return res.status(422).json({ errors: validationErrors.array() })

   try {
      const hashedPass = await bcrypt.hash(req.body.firstPassword, 10)
      const emailToken = jwt.sign({ userName, email }, EMAIL_SECRET, { expiresIn: `${nodemailer.EMAIL_TOKEN_EXPIRESIN}min` })
      await nodemailer.sendEmailWhenUserRegisters(email, 'Email cím regisztrálása', userName, emailToken)
      await User.create({
         userName,
         password: hashedPass,
         email
      })
      res.status(201).json({
         message: 'A regisztráció sikeres volt - Az email címedre megküldtük a regisztráció megerősítéhez szükséges kódot!'
      })
   } catch (error) {
      res.status(500).json(error)
   }
}

export const loginUserController = async (req: Request, res: Response) => {
   const user = await User.findOne({ $or: [{ email: req.body.email }, { userName: req.body.email }] })

   if (!user) return res.status(404).json(ErrorResponse(true, 'Nincs regisztrálva felhasználó ezzel az email címmel'))

   try {
      if (await bcrypt.compare(req.body.password, user.password)) {
         if (!user.isEmailConfirmed)
            return res.status(403).json(ErrorResponse(true, 'Az email címed még nem lett regsiztrálva! Kérlek erősítsd meg!'))
         const accessToken = generateTokens(user._id, user.userName, user.isAdmin, user.email, ACCESS_TOKEN_SECRET)
         const refreshToken = generateTokens(user._id, user.userName, user.isAdmin, user.email, REFRESH_TOKEN_SECRET, '1day')
         res.status(200).json({ accessToken, refreshToken, userId: user._id, userName: user.userName, isAdmin: user.isAdmin })
      } else res.status(403).json(ErrorResponse(true, 'Helytelen jelszó', 'password'))
   } catch (error) {
      res.status(500).json(error)
   }
}

export const checkTokensValidityController = (req: Request, res: Response) => {
   const refreshToken: string = req.body.refreshToken
   if (!refreshToken) return res.sendStatus(401)
   try {
      jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded: any) => {
         if (err) return res.status(403).json({ errorMessage: 'refresh token expired' })
         const newAccessToken = generateTokens(decoded._id, decoded.userName, decoded.isAdmin, decoded.email, ACCESS_TOKEN_SECRET)
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
   expiresIn: string = '20min'
) => {
   return jwt.sign({ _id: userId, userName, isAdmin, email }, TOKEN_SECRET, { expiresIn })
}

export const ErrorResponse = (hasError: boolean, errorMessage: string = '', errorType: string = 'email') => {
   return {
      errorType,
      hasError,
      errorMessage
   }
}
