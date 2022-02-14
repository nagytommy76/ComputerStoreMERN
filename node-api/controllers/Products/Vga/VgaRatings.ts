import { Response } from 'express'
import { ObjectId } from 'mongoose'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'

import {
   getProductRatingSummary,
   LikeQuery,
   likeDislikeCommentHelper,
   RemoveRatingRequest,
   removeUsersRatingHelper,
   RateQueryRequest,
   saveRateProductHelper,
} from '../Ratings/BaseRating'

type RequestWithQueryId = {
   query: {
      _id: ObjectId
   }
}

export const rateVgaProductController = async (req: RateQueryRequest, res: Response) => {
   try {
      const modifiedProduct = await saveRateProductHelper(
         req.body._id,
         VgaProduct,
         req.body.rating,
         req.body.comment,
         req.body.userName,
         req.user?._id
      )
      if (modifiedProduct !== undefined) {
         modifiedProduct.save()
         return res.sendStatus(201)
      } else return res.sendStatus(422)
   } catch (error) {
      return res.status(500).json(error)
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
