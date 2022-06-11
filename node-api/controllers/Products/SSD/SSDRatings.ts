import { Response } from 'express'
import { SSDProduct } from '../../../models/Products/SSD/SSD'
import BaseRatingController from '../Ratings/BaseRating'

import { RequestWithQueryId } from '../../Types'
import {
   LikeQuery,
   RateQueryRequest,
   RemoveRatingRequest,
   SaveRequesType,
   RemoveRequesType,
} from '../Ratings/RatingTypes'

const BaseRating = BaseRatingController(SSDProduct)

export const getSSDRatingSummaryController = async (req: RequestWithQueryId, res: Response) => {
   try {
      const returnRatingValues = await BaseRating.getProductRatingSummary(req.query._id)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllSSDComments = async (req: RequestWithQueryId, res: Response) => {
   try {
      const allComments = await SSDProduct.find({ _id: req.query._id }, 'ratingValues')
      return res.status(200).json(allComments[0].ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}
