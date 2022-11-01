import { ObjectId } from 'mongoose'
import { BaseProductType, RatingValues } from '../../../models/Products/BaseTypes'

import { UserTypes } from '../../../models/User/UserTypes'
import { CommentAnswerType } from '../../../models/Products/BaseTypes'

export const canSaveProductAnswer = (getRatingValuesByProductId: (productId: ObjectId) => Promise<any>) => ({
   saveProductAnswerController: async (
      productId: ObjectId,
      commentId: ObjectId,
      commentDepth: number,
      parentCommentId: ObjectId,
      answer: string,
      user: UserTypes | undefined
   ) => {
      const foundProduct = await getRatingValuesByProductId(productId)
      const foundComment = foundProduct.ratingValues.find((comment: RatingValues) => comment._id == commentId)
      const foundCommentIndex = foundProduct.ratingValues.findIndex(
         (comment: RatingValues) => comment._id == commentId
      )
      if (foundComment && user) {
         foundComment.commentAnswers.push({
            answer: answer,
            commentDepth,
            parentCommentId,
            answeredAt: new Date(),
            userId: user._id,
            userName: user.userName,
         })
      }
      return {
         newCommentAnswers: foundProduct.ratingValues[foundCommentIndex].commentAnswers,
         foundProduct,
      }
   },
})

export const canEditProductAnswer = (
   getRatingValuesByProductId: (productId: ObjectId) => Promise<BaseProductType>
) => ({
   editProductAnswerController: async (
      productId: ObjectId,
      commentId: ObjectId,
      commentAnswerId: ObjectId,
      editedAnswerText: string
   ) => {
      const foundProduct = await getRatingValuesByProductId(productId)
      const foundComment = foundProduct.ratingValues.find((comment: RatingValues) => comment._id == commentId)
      const foundCommentAnswer = foundComment?.commentAnswers.find(answer => answer._id === commentAnswerId)
      if (foundCommentAnswer && foundComment) {
         foundCommentAnswer.answer = editedAnswerText
         return { foundCommentAnswer, foundProduct }
      } else return { foundCommentAnswer: null, foundProduct }
   },
})

export const canRemoveProductAnswer = (
   getRatingValuesByProductId: (productId: ObjectId) => Promise<any>
) => ({
   removeProductAnswerController: async (productId: ObjectId, commentId: ObjectId, answerId: ObjectId) => {
      const foundProduct = await getRatingValuesByProductId(productId)
      const foundComment = foundProduct.ratingValues.find((comment: RatingValues) => comment._id == commentId)
      if (foundComment) {
         const filteredAnswers = foundComment.commentAnswers.filter(
            (answer: CommentAnswerType) => answer._id != answerId
         )
         foundComment.commentAnswers = filteredAnswers
      }
      return { foundComment: foundComment.commentAnswers, foundProduct }
   },
})
