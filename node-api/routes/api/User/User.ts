import express, { Request, Response } from 'express'
import { UserTypes } from '../../../models/User/UserTypes'
import bcrypt from 'bcrypt'

const router = express.Router()
const User2: UserTypes[] = []
const User = {
   userName: 'nagytommy76',
   email: 'nagytommy76@hotmail.com',
   password: 'password',
   fullName: 'Nagy Tamás',
   phone: '06705773790',
   address: {
      zipCode: 1119,
      city: 'Budapest',
      street: 'Nincs utca',
      houseNumber: '44/a',
      floor: '',
      door: ''
   }
}

router.post('/registerUser', async (req: Request, res: Response) => {
   try {
      const hashedPass = await bcrypt.hash(req.body.password, 10)
      const user = {
         userName: req.body.userName,
         password: hashedPass,
         email: req.body.email
      }
      User2.push(user)
      res.status(201).send()
   } catch (error) {
      res.status(500).send({ errorMessage: error })
   }
})

router.post('/loginUser', async (req: Request, res: Response) => {
   const user = User2.find((foundUser) => foundUser.email === req.body.email)
   if (!user) {
      return res.status(401).send('user not found')
   }
   try {
      if (await bcrypt.compare(req.body.password, user.password)) res.send('user logged in')
      else res.send('not registered user')
   } catch (error) {
      res.status(500).send({ errorMessage: error })
   }
})

module.exports = router
