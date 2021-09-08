import { NextFunction, Response } from 'express'
import { RequestBodyType } from '../controllers/User/UserDetails'
import { User } from '../models/User/User'
import { UserTypes } from '../models/User/UserTypes'

import { Document } from 'mongoose'

type test = Request & {
   user: UserTypes
   foundUser: UserTypes & Document<any, any>
}

export const checkUserIsFound = async (req: test, res: Response, next: NextFunction) => {
   const foundUser = await User.findById(req.user?._id)
   if (foundUser == null) return res.status(404).json({ message: 'Felhasználó nem található!' })
   req.foundUser = foundUser
   next()
}
