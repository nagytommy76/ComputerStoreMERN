import express, { Request, Response } from 'express'
import { UserTypes } from '../../../models/User/UserTypes'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from '../../../config/endpoints.config'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessToken'
import { User } from '../../../models/User/User'

const router = express.Router()

const ErrorResponse = (hasError: boolean, errorMessage: string = '', errorType: string = 'email', message: string = '') => {
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
         const accessToken = jwt.sign(user.toJSON(), ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
         res.status(200).json({ accessToken, userName: user.userName })
      } else res.send(ErrorResponse(true, 'Helytelen jelszó', 'password'))
   } catch (error) {
      console.log(error)
      res.status(403).json(error)
   }
})

router.post('/posts', authenticateAccessToken, (req, res) => {
   return res.json({ msg: 'sikeres authentikáció' })
})

module.exports = router
