import { Request, Response } from 'express'
import { UserTypes } from '../../models/User/UserTypes'
import { User } from '../../models/User/User'

export const handleUserOrderController = (req: RequestWithUser, res: Response) => {
   try {
      return res.status(200).json({ msg: 'megrendelted!', USER: req.user })
   } catch (error) {
      return res.sendStatus(500)
   }
}

type RequestWithUser = Request & {
   user?: {
      _id: string
      userName: string
      isAdmin: boolean
      email: string
      iat: number
      exp: number
   }
}
