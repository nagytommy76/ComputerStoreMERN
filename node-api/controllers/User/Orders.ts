import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { JWTUserType } from '../Types'

export const handleUserOrderController = async (req: RequestWithUser, res: Response) => {
   try {
      const foundUser = await User.findById(req.user?._id)
      if (foundUser) {
         console.log(foundUser.orders.payedAt)
         console.log(foundUser.orders.paymentMethod === 'stripeCard')
         console.log(foundUser.orders.orderedAt)
         return res.status(200).json({ msg: 'megrendelted!', USER: req.user })
      }
      return res.status(404).json({ msg: 'A felhasználó nem található' })
   } catch (error) {
      return res.status(500).json({ error })
   }
}

type RequestWithUser = Request & {
   user?: JWTUserType
   body: {
      paymentMethod: string
   }
}
