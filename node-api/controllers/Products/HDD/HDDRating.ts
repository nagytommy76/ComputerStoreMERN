import { Request, Response } from 'express'
import { HddProduct } from '../../../models/Products/HDD/Hdd'
import { RequestWithQueryId } from '../../Types'
import BaseRatingController from '../Ratings/BaseRating'

const BaseRating = BaseRatingController(HddProduct)

export const getHDDRatingSummaryController = async (req: RequestWithQueryId, res: Response) => {
   try {
      const returnRatingValues = await BaseRating.getProductRatingSummary(req.query._id)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllHDDComments = async (req: RequestWithQueryId, res: Response) => {
   try {
      const allComments = await BaseRating.getAllComments(req.query._id)
      return res.status(200).json(allComments.ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}
