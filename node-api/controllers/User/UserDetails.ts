import { Response } from 'express'
import { GetUserAuthInfoRequest } from '../Cart/CartHelper'

export const insertUserDetailsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      const foundUser = req.foundUser
      foundUser.userDetails = req.body.userDetails
      foundUser.save()
      res.sendStatus(201)
   } catch (error) {
      res.status(500).json(error)
   }
}

export const getUserDetailsController = async (req: GetUserAuthInfoRequest, res: Response) => {
   try {
      if (req.foundUser.userDetails.firstName == undefined || req.foundUser.userDetails.firstName == '') {
         res.status(200).json({ userDetails: null, isDetailsFilled: false })
      }
      return res.status(200).json({ userDetails: req.foundUser.userDetails, isDetailsFilled: true })
   } catch (error) {
      res.status(500).json(error)
   }
}
