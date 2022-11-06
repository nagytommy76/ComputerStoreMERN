import { Response } from 'express'
import { Model } from 'mongoose'
import BaseRatingController from './BaseRating'

import { RequestWithQueryId } from '../../Types'
import {
   LikeQuery,
   RateQueryRequest,
   RemoveRatingRequest,
   SaveRequestType,
   RemoveRequestType,
   LikeDislikeResponseType,
   EditRequestType,
} from '../Ratings/RatingTypes'

export default class BaseRating {
   private ProductModel: Model<any>
   private BaseRatingHelper

   constructor(ProductModel: Model<any>) {
      this.ProductModel = ProductModel
      this.BaseRatingHelper = BaseRatingController(ProductModel)
   }

   getRatingSummaryController = async (req: RequestWithQueryId, res: Response) => {
      try {
         const returnRatingValues = await this.BaseRatingHelper.getProductRatingSummary(req.query._id)
         return res.status(200).json(returnRatingValues)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

   getAllComments = async (req: RequestWithQueryId, res: Response) => {
      try {
         const allComments = await this.ProductModel.find({ _id: req.query._id }, 'ratingValues')
         return res.status(200).json(allComments[0].ratingValues)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

   rateProductController = async (req: RateQueryRequest, res: Response) => {
      try {
         const modifiedProduct = await this.BaseRatingHelper.saveRateProductHelper(
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

   removeUsersRatingController = async (req: RemoveRatingRequest, res: Response) => {
      try {
         const {
            body: { productId, commentIdToDelete },
         } = req as RemoveRatingRequest
         const result = await this.BaseRatingHelper.removeUsersRating(
            productId,
            commentIdToDelete,
            req.user?._id
         )
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
   saveAnswerController = async (req: SaveRequestType, res: Response) => {
      try {
         const { foundProduct, newCommentAnswers } = await this.BaseRatingHelper.saveProductAnswerController(
            req.body.productId,
            req.body.commentId,
            req.body.commentDepth,
            req.body.parentCommentId,
            req.body.answer,
            req.user
         )
         foundProduct.save()
         return res.status(201).json(newCommentAnswers)
      } catch (error) {
         res.status(500).json({ error })
      }
   }

   removeSingleCommentAnswer = async (req: RemoveRequestType, res: Response) => {
      try {
         const { foundComment, foundProduct } = await this.BaseRatingHelper.removeProductAnswerController(
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

   editAnswerController = async (req: EditRequestType, res: Response) => {
      try {
         const { answerEditText, answerId, commentId, productId } = req.body
         const { foundCommentAnswer } = await this.BaseRatingHelper.editProductAnswerController(
            productId,
            commentId,
            answerId,
            answerEditText
         )
         if (foundCommentAnswer !== null) res.status(200).json({ foundCommentAnswer })
         else res.sendStatus(404)
      } catch (error) {
         console.error(error)
      }
   }

   editCommentController = async (req: EditRequestType, res: Response) => {
      try {
         const { answerEditText, answerId, commentId, productId } = req.body
         const { foundCommentAnswer } = await this.BaseRatingHelper.editProductAnswerController(
            productId,
            commentId,
            answerId,
            answerEditText
         )
         res.status(200).json({ foundCommentAnswer })
      } catch (error) {
         console.error(error)
      }
   }

   likeDislikeCommentController = async (req: LikeQuery, res: Response) => {
      try {
         const { productId, commentId, isLike, answerId } = req.body
         let result: LikeDislikeResponseType
         if (answerId) {
            result = await this.BaseRatingHelper.likeDislikeAnswers(
               productId,
               commentId,
               req.user?._id,
               isLike,
               answerId
            )
         } else {
            result = await this.BaseRatingHelper.likeDislikeComment(
               productId,
               commentId,
               req.user?._id,
               isLike
            )
         }
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
}
