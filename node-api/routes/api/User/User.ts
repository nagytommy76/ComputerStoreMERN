import express, { Request, Response } from 'express'
import { UserTypes } from '../../../models/User/UserTypes'
import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import { generateTokens } from './User.helper'
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../../../config/endpoints.config'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { User } from '../../../models/User/User'
type RequestWithUser = Request & {
   user?: UserTypes | null
}

const router = express.Router()

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

router.post('/register', async (req: Request, res: Response) => {
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
})

router.post('/login', async (req: Request, res: Response) => {
   const user = await User.findOne({ email: req.body.email })
   if (!user) {
      return res.status(404).json(ErrorResponse(true, 'Nincs regszitrálva ilyen felhasználó'))
   }
   try {
      if (await bcrypt.compare(req.body.password, user.password)) {
         const accessToken = generateTokens(user.toJSON(), ACCESS_TOKEN_SECRET)
         const refreshToken = generateTokens(user.toJSON(), REFRESH_TOKEN_SECRET, '30min')
         res.status(200).json({ accessToken, refreshToken, userName: user.userName })
      } else res.send(ErrorResponse(true, 'Helytelen jelszó', 'password'))
   } catch (error) {
      console.log(error)
      res.status(403).json(error)
   }
})

router.post('/refresh-token', (req, res) => {
   const refreshToken = req.body.refreshToken
})

router.post('/posts', authenticateAccessToken, (req: RequestWithUser, res: Response) => {
   console.log(req.user)
   return res.json({ msg: 'sikeres authentikáció' })
})

// https://www.youtube.com/watch?v=mbsmsi7l3r4&ab_channel=WebDevSimplified

module.exports = router
