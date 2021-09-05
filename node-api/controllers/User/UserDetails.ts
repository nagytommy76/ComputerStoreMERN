import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { validationResult } from 'express-validator'
import { GetUserAuthInfoRequest } from '../Cart/CartHelper'
import { UserDetailsTypes } from '../../models/User/UserTypes'

type RequestBodyType = GetUserAuthInfoRequest & {
   body: {
      userDetails: UserDetailsTypes
   }
}

export const insertUserDetailsController = async (req: RequestBodyType, res: Response) => {
   try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) return res.status(422).json(errors)
      const foundUser = await User.findById(req.user?._id)
      if (foundUser == null) return res.status(404).json({ message: 'Felhasználó ne mtalálható' })
      foundUser.userDetails = req.body.userDetails
      foundUser.save()
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json(error)
   }
}

export const getUserDetailsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const foundUser = await User.findOne({ _id: req.user?._id })
      if (foundUser == null) return res.status(404).json({ message: 'Felhasználó nem található' })
      if (foundUser.userDetails.firstName == undefined || foundUser.userDetails.firstName == '') {
         return res.status(200).json({ userDetails: null, isDetailsFilled: false })
      }
      return res.status(200).json({ userDetails: foundUser.userDetails, isDetailsFilled: true })
   } catch (error) {
      res.status(500).json(error)
   }
}
