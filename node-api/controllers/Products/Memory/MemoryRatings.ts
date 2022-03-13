import { Response } from 'express'
import { MemoryProduct } from '../../../models/Products/Memory/Memory'
import BaseRatingController from '../Ratings/BaseRating'

import { RequestWithQueryId } from '../../Types'
import { LikeQuery, RateQueryRequest, RemoveRatingRequest } from '../Ratings/RatingTypes'

const BaseRating = BaseRatingController(MemoryProduct)

export const getMemoryRatingSummaryController = async (req: RequestWithQueryId, res: Response) => {
   try {
      const returnRatingValues = await BaseRating.getProductRatingSummary(req.query._id)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const getAllMemoryComments = async (req: RequestWithQueryId, res: Response) => {
   try {
      const allComments = await MemoryProduct.find({ _id: req.query._id }, 'ratingValues').lean()
      return res.status(200).json(allComments[0].ratingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const rateMemoryProductController = async (req: RateQueryRequest, res: Response) => {
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
      return res.status(500).json(error)
   }
}

export const likeDislikeMemoryCommentController = async (req: LikeQuery, res: Response) => {
   try {
      const result = await BaseRating.likeDislikeComment(
         req.body.productId,
         req.body.commentId,
         req.user?._id,
         req.body.isLike
      )
      switch (result.statusCode) {
         case 201:
            return res.status(result.statusCode).json({ responses: result.responses })
         case 405:
            return res.status(result.statusCode).json(result)
         case 404:
            return res.sendStatus(result.statusCode)
      }
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const removeUsersRatingInMemory = async (req: RemoveRatingRequest, res: Response) => {
   try {
      const {
         body: { productId, commentIdToDelete },
      } = req as RemoveRatingRequest
      const result = await BaseRating.removeUsersRating(productId, commentIdToDelete, req.user?._id)
      switch (result.statusCode) {
         case 200:
            return res.status(result.statusCode).json(result)
         case 404:
            return res.sendStatus(404)
      }
   } catch (error) {
      return res.status(500).json(error)
   }
}
