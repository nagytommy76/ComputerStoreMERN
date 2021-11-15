import { Response, Request } from 'express'
import { Model } from 'mongoose'
import { RatingValues } from '../../../models/Products/BaseTypes'

import { UserTypes } from '../../../models/User/UserTypes'
import { CommentAnswerType } from '../../../models/Products/BaseTypes'

export type SaveRequesType = Request & {
   user?: UserTypes
   body: {
      productId: string
      commentId: string
      answer: string
   }
}

export type RemoveRequesType = Request & {
   user?: UserTypes
   body: {
      productId: string
      commentId: string
      answerId: string
   }
}

export const saveProductAnswerController = (req: SaveRequesType, foundProduct: any) => {
   const foundComment = foundProduct.ratingValues.find((comment: RatingValues) => comment._id == req.body.commentId)
   const foundCommentIndex = foundProduct.ratingValues.findIndex((comment: RatingValues) => comment._id == req.body.commentId)
   if (foundComment && req.user) {
      foundComment.commentAnswers.push({
         answer: req.body.answer,
         answeredAt: new Date(),
         userId: req.user._id,
         userName: req.user.userName
      })
   }
   return foundProduct.ratingValues[foundCommentIndex].commentAnswers
}

// Remove Answer
export const removeProductAnswerController = (req: RemoveRequesType, foundProduct: any) => {
   const foundComment = foundProduct.ratingValues.find((comment: RatingValues) => comment._id == req.body.commentId)
   if (foundComment) {
      const filteredAnswers = foundComment.commentAnswers.filter((answer: CommentAnswerType) => answer._id != req.body.answerId)
      foundComment.commentAnswers = filteredAnswers
   }
   return foundComment.commentAnswers
}
