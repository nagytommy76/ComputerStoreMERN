import { NextFunction, Response } from 'express'
import { GetUserAuthInfoRequest } from '../controllers/Cart/CartHelper'
import { User } from '../models/User/User'

export const checkUserIsFound = async (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
   const foundUser = await User.findById(req.user?._id)
   if (foundUser == null) return res.status(404).json({ message: 'Felhasználó nem található!' })
   req.foundUser = foundUser
   next()
}
