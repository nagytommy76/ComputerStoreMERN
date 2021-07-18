import { Request, Response } from 'express'
import { User } from '../models/User/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../config/endpoints.config'

export const registerUserController = async (req: Request, res: Response) => {
   const checkUserRegistered = await User.findOne({ email: req.body.email, userName: req.body.userName })
   if (checkUserRegistered != null) return res.status(404).json(ErrorResponse(true, 'Az email cím már regisztrálva lett'))
   try {
      const hashedPass = await bcrypt.hash(req.body.password, 10)
      await User.create({
         userName: req.body.userName,
         password: hashedPass,
         email: req.body.email
      })
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json(error)
   }
}

export const loginUserController = async (req: Request, res: Response) => {
   const user = await User.findOne({ email: req.body.email })
   if (!user) {
      return res.status(404).json(ErrorResponse(true, 'Nincs regszitrálva ilyen felhasználó'))
   }
   try {
      if (await bcrypt.compare(req.body.password, user.password)) {
         const accessToken = generateTokens(user._id, user.isAdmin, ACCESS_TOKEN_SECRET)
         const refreshToken = generateTokens(user._id, user.isAdmin, REFRESH_TOKEN_SECRET, '1d')
         res.status(200).json({ accessToken, refreshToken, userName: user.userName, isAdmin: user.isAdmin })
      } else res.status(404).json(ErrorResponse(true, 'Helytelen jelszó', 'password'))
   } catch (error) {
      console.log(error)
      res.status(403).json(error)
   }
}

export const checkTokensValidityController = (req: Request, res: Response) => {
   const refreshToken: string = req.body.refreshToken
   if (!refreshToken) return res.sendStatus(401)
   try {
      jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded: any) => {
         if (err) return res.status(403).json({ errorMessage: 'refresh token expired' })
         const newAccessToken = generateTokens(decoded._id, decoded.isAdmin, ACCESS_TOKEN_SECRET)
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
export const generateTokens = (userId: string, isAdmin: boolean, TOKEN_SECRET: string, expiresIn: string = '15min') => {
   return jwt.sign({ _id: userId, isAdmin }, TOKEN_SECRET, { expiresIn })
}

export const ErrorResponse = (
   hasError: boolean,
   errorMessage: string = '',
   errorType: string = 'email',
   message: string = ''
) => {
   return {
      message,
      errorType,
      hasError,
      errorMessage
   }
}
