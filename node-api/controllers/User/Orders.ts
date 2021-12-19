import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { JWTUserType } from '../Types'

export const handleUserOrderController = (req: RequestWithUser, res: Response) => {
   try {
      return res.status(200).json({ msg: 'megrendelted!', USER: req.user })
   } catch (error) {
      return res.sendStatus(500)
   }
}

type RequestWithUser = Request & {
   user?: JWTUserType
}
