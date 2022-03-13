import { Response } from 'express'
import { VgaProduct } from '../../../models/Products/Vga/VgaProduct'
import BaseRatingController from '../Ratings/BaseRating'

import { RequestWithQueryId } from '../../Types'
import {
   LikeQuery,
   RateQueryRequest,
   RemoveRatingRequest,
   SaveRequesType,
   RemoveRequesType,
} from '../Ratings/RatingTypes'

const BaseRating = BaseRatingController(VgaProduct)

export const getVgaRatingSummaryController = async (req: RequestWithQueryId, res: Response) => {
   try {
      const returnRatingValues = await BaseRating.getProductRatingSummary(req.query._id)
      return res.status(200).json(returnRatingValues)
   } catch (error) {
      return res.status(500).json(error)
   }
}

export const rateVgaProductController = async (req: RateQueryRequest, res: Response) => {
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

export const removeUsersRatingInVga = async (req: RemoveRatingRequest, res: Response) => {
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

// Rating answers
export const saveVgaAnswerController = async (req: SaveRequesType, res: Response) => {
   try {
      const { foundProduct, newCommentAnswers } = await BaseRating.saveProductAnswerController(
         req.body.productId,
         req.body.commentId,
         req.body.answer,
         req.user
      )
      foundProduct.save()
      return res.status(201).json(newCommentAnswers)
   } catch (error) {
      res.status(500).json({ error })
   }
}

export const removeSingleVgaCommentAnswer = async (req: RemoveRequesType, res: Response) => {
   try {
      const { foundComment, foundProduct } = await BaseRating.removeProductAnswerController(
         req.body.productId,
         req.body.commentId,
         req.body.answerId
      )
      if (foundProduct) {
         foundProduct.save()
         return res.status(200).json(foundComment)
      }
      return res.sendStatus(404)
   } catch (error) {
      return res.status(500).json(error)
   }
}
