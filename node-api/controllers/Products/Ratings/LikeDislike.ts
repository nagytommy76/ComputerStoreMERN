import { ObjectId } from 'mongoose'
import { BaseProductType, CommentAnswerType, RatingValues } from '../../../models/Products/BaseTypes'
import { LikeDislikeResponseType } from './RatingTypes'

const returnFoundComment = (foundProduct: BaseProductType, commentId: string | ObjectId) => {
   return foundProduct.ratingValues.filter(comment => comment._id == commentId)
}

const returnFoundCommentAnswer = (foundComment: RatingValues[], answerId: string | ObjectId) => {
   return foundComment[0].commentAnswers.find(answer => answer._id == answerId)
}

const checkFoundCommentOrAnswer = (
   foundCommentOrAnswer: RatingValues | CommentAnswerType,
   isLike: boolean,
   userId: string | undefined,
   message: string = 'kommented'
) => {
   // A user a saját kommentjét ne tudja like/dislikeolni
   if (foundCommentOrAnswer.userId == userId) {
      return {
         statusCode: 405,
         message: `A saját ${message} nem like-olhatod :)`,
      }
   }
   if (foundCommentOrAnswer.responses.length == 0) {
      // Ha még nincs like/dislike
      foundCommentOrAnswer.responses.push({ isLike, userId })
   } else {
      // Ha van már like
      // A user adott már like/dislike-ot?
      const foundCommentIndex = foundCommentOrAnswer.responses.findIndex(comment => comment.userId == userId)

      if (foundCommentIndex >= 0) foundCommentOrAnswer.responses.splice(foundCommentIndex, 1)
      else foundCommentOrAnswer.responses.push({ isLike, userId })
   }

   return null
}

export const canLikeDislike = (
   getRatingValuesByProductId: (productId: ObjectId) => Promise<BaseProductType>
) => ({
   likeDislikeComment: async (
      productId: ObjectId,
      commentId: ObjectId,
      userId: string | undefined,
      isLike: boolean
   ) => {
      const foundProduct = await getRatingValuesByProductId(productId)
      if (!foundProduct) return { message: '', statusCode: 404 } as LikeDislikeResponseType
      const foundComment = returnFoundComment(foundProduct, commentId)

      const returnValue = checkFoundCommentOrAnswer(foundComment[0], isLike, userId)
      if (returnValue) return returnValue

      foundProduct.save()
      return {
         message: 'Sikeresen mentve!',
         statusCode: 201,
         responses: foundComment[0].responses,
      } as LikeDislikeResponseType
   },
   likeDislikeAnswers: async (
      productId: ObjectId,
      commentId: ObjectId,
      userId: string | undefined,
      isLike: boolean,
      answerId: ObjectId
   ) => {
      const foundProduct = await getRatingValuesByProductId(productId)
      if (!foundProduct) return { message: '', statusCode: 404 } as LikeDislikeResponseType
      const foundComment = returnFoundComment(foundProduct, commentId)

      const foundCommentAnswer = returnFoundCommentAnswer(foundComment, answerId)
      if (!foundCommentAnswer) return { message: 'A válasz nem találhatő', statusCode: 404 }

      const returnValue = checkFoundCommentOrAnswer(foundCommentAnswer, isLike, userId, 'válaszodat')
      if (returnValue) return returnValue

      foundProduct.save()
      return {
         message: 'Sikeresen mentve!',
         statusCode: 201,
         responses: foundCommentAnswer.responses,
      } as LikeDislikeResponseType
   },
})
