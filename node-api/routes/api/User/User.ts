import express, { Request, Response } from 'express'
import { UserTypes } from '../../../models/User/UserTypes'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ACCESS_TOKEN_SECRET } from '../../../config/endpoints.config'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessToken'
import { User } from '../../../models/User/User'

const router = express.Router()

router.post('/register', async (req: Request, res: Response) => {
   const checkUserRegistered = await User.findOne({ email: req.body.email, userName: req.body.userName })
   if (checkUserRegistered != null) return res.status(500).json({ errorMessage: 'A felhasználó már regisztrálva lett' })
   try {
      const hashedPass = await bcrypt.hash(req.body.password, 10)
      const user = {
         userName: req.body.userName,
         password: hashedPass,
         email: req.body.email
      }
      const createdUser = await User.create(user)
      res.status(201).json(createdUser)
   } catch (error) {
      res.status(500).send({ errorMessage: error })
   }
})

router.post('/login', async (req: Request, res: Response) => {
   const user = await User.findOne({ email: req.body.email })
   if (!user) {
      return res.status(401).json({ errorMessage: 'Nincs regszitrálva ilyen felhasználó' })
   }
   try {
      if (await bcrypt.compare(req.body.password, user.password)) {
         const accesToken = jwt.sign(user.toJSON(), ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
         res.status(200).json(accesToken)
      } else res.send('incorrect password')
   } catch (error) {
      console.log(error)
      res.status(400).json(error)
   }
})

router.post('/posts', authenticateAccessToken, (req, res) => {
   return res.json({ msg: 'sikeres authentikáció' })
})

module.exports = router
