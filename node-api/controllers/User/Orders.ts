import { Request, Response } from 'express'
import { User } from '../../models/User/User'

export const handleUserOrderController = (req: Request, res: Response) => {
   try {
      return res.status(200).json({ msg: 'megrendelted!' })
   } catch (error) {
      return res.sendStatus(500)
   }
}
