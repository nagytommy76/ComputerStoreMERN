import { Model, ObjectId } from 'mongoose'
import { BaseProductType } from '../../../models/Products/BaseTypes'
import { LikeDislikeResponseType } from './RatingTypes'

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
      const foundComment = foundProduct.ratingValues.filter(comment => comment._id == commentId)

      // A user a saját kommentjét ne tudja like/dislikeolni
      if (foundComment[0].userId == userId) {
         return {
            statusCode: 405,
            message: 'A saját kommented nem like-olhatod :)',
         } as LikeDislikeResponseType
      }
      if (foundComment[0].responses.length == 0) {
         // Ha még nincs like/dislike
         foundComment[0].responses.push({ isLike, userId })
      } else {
         // Ha van már like
         // A user adott már like/dislike-ot?
         const foundCommentIndex = foundComment[0].responses.findIndex(comment => comment.userId == userId)

         if (foundCommentIndex >= 0) foundComment[0].responses.splice(foundCommentIndex, 1)
         else foundComment[0].responses.push({ isLike, userId })
      }
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
      const foundComment = foundProduct.ratingValues.filter(comment => comment._id == commentId)

      const foundCommentAnswer = foundComment[0].commentAnswers.find(answer => answer._id == answerId)
      if (!foundCommentAnswer) return { message: 'A válasz nem találhatő', statusCode: 404 }
      if (foundCommentAnswer.userId == userId)
         return {
            statusCode: 405,
            message: 'A saját válaszodat nem like-olhatod :)',
         } as LikeDislikeResponseType

      if (foundCommentAnswer.responses.length === 0) foundCommentAnswer.responses.push({ isLike, userId })
      else {
         const foundCommentIndex = foundCommentAnswer.responses.findIndex(answer => answer.userId == userId)

         // Itt van már rajta like az adott user-től, eltávolítom
         if (foundCommentIndex >= 0) foundCommentAnswer.responses.splice(foundCommentIndex, 1)
         else foundCommentAnswer.responses.push({ isLike, userId })
      }
      foundProduct.save()
      return {
         message: 'Sikeresen mentve!',
         statusCode: 201,
         responses: foundCommentAnswer.responses,
      } as LikeDislikeResponseType
   },
})
