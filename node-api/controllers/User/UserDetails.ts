import { Request, Response } from 'express'
import { User } from '../../models/User/User'
import { GetUserAuthInfoRequest } from '../Cart/CartHelper'
import { UserDetailsTypes, UserTypes } from '../../models/User/UserTypes'
import { Document } from 'mongoose'

export type RequestBodyType = GetUserAuthInfoRequest & {
   body: {
      userDetails: UserDetailsTypes
   }
   foundUser: (UserTypes & Document<any, any>) | Response<any, Record<string, any>> | any
}

// RequestBodyType
export const insertUserDetailsController = async (req: RequestBodyType, res: Response) => {
   try {
      const foundUser = req.foundUser
      foundUser.userDetails = req.body.userDetails
      foundUser.save()
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json(error)
   }
}

// GetUserAuthInfoRequest
export const getUserDetailsController = async (req: any, res: Response) => {
   try {
      if (req.foundUser.userDetails.firstName == undefined || req.foundUser.userDetails.firstName == '') {
         return res.status(200).json({ userDetails: null, isDetailsFilled: false })
      }
      return res.status(200).json({ userDetails: req.foundUser.userDetails, isDetailsFilled: true })
   } catch (error) {
      res.status(500).json(error)
   }
}
