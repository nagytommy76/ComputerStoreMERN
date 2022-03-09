import { Request, Response } from 'express'
import { ObjectId } from 'mongoose'
import { HddProduct } from '../../../models/Products/HDD/Hdd'
import { RequestWithQueryId } from '../../Types'
import BaseRatingController, { LikeQuery, RateQueryRequest } from '../Ratings/BaseRating'

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

export const rateHDDProductController = async (req: RateQueryRequest, res: Response) => {
   try {
      const modifiedProduct = await BaseRating.saveRateProductHelper(
         req.body.productId,
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
      return res.status(500).json({ error })
   }
}

export const likeDislikeHDDCommentController = async (req: LikeQuery, res: Response) => {
   try {
      const result = await BaseRating.likeDislikeComment(
         req.body.productId,
         req.body.commentId,
         req.user?._id
      )
      res.status(200).json(result)
   } catch (error) {
      return res.status(500).json(error)
   }
}
