import { Response } from 'express'
import { ObjectId } from 'mongoose'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'

import {
   RequestQuery,
   getProductRatingSummary,
   LikeQuery,
   likeDislikeCommentHelper,
   RemoveRatingRequest,
   removeUsersRatingHelper
} from '../Ratings/BaseRating'

type RequestWithQueryId = {
   query: {
      _id: ObjectId
   }
}

export const getVgaRatingSummaryController = async (req: RequestWithQueryId, res: Response) => {
   try {
      const returnRatingValues = await getProductRatingSummary(req.query._id, VgaProduct)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllVgaComments = async (req: RequestWithQueryId, res: Response) => {
   try {
      const allComments = await VgaProduct.find({ _id: req.query._id }, 'ratingValues')
      return res.status(200).json(allComments[0].ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const likeDislikeVgaCommentController = async (req: LikeQuery, res: Response) => {
   try {
      likeDislikeCommentHelper(req, res, VgaProduct)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const removeUsersRatingInVga = (req: RemoveRatingRequest, res: Response) => {
   try {
      removeUsersRatingHelper(req, res, VgaProduct)
   } catch (error) {
      return res.status(500).json(error)
   }
}
