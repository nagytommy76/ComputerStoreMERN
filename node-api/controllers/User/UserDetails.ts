import { Response } from 'express'
import { User } from '../../models/User/User'
import { GetUserAuthInfoRequest } from '../Cart/CartHelper'

export const insertUserDetailsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const foundUser = req.foundUser
      foundUser.userDetails = req.body.userDetails
      foundUser.save()
      res.sendStatus(201)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getUserDetailsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      if (req.foundUser.userDetails.firstName == undefined || req.foundUser.userDetails.firstName == '') {
         return res.status(200).json({ userDetails: null, isDetailsFilled: false })
      }
      return res.status(200).json({ userDetails: req.foundUser.userDetails, isDetailsFilled: true })
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const updateUserDetailsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const foundUser = req.foundUser
      foundUser.userDetails = req.body.userDetails
      foundUser.save()
      return res.sendStatus(200)
   } catch (error) {
      return res.status(500).json(error)
   }
}
