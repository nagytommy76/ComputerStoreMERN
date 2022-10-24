import { Model, ObjectId } from 'mongoose'
import { canSaveProductAnswer, canRemoveProductAnswer } from './BaseResponse'

import { BaseProductType, RatingValues } from '../../../models/Products/BaseTypes'
import { LikeDislikeResponseType } from './RatingTypes'

type StateType = { productModel: Model<any, {}, {}> }

const canReturnById = (state: StateType) => ({
   getLeanProductById: async (ProductId: ObjectId) => {
      return await state.productModel.findById(ProductId).lean()
   },
   getProductById: async (ProductId: ObjectId) => {
      return await state.productModel.findById(ProductId)
   },
   getLeanRatingValuesByProductId: async (productId: ObjectId) => {
      return await state.productModel.findById(productId, 'ratingValues').lean()
   },
   getRatingValuesByProductId: async (productId: ObjectId): Promise<BaseProductType> => {
      return await state.productModel.findById(productId, 'ratingValues')
   },
   getCommentsInFoundProduct: (Product: BaseProductType, commentId: ObjectId) => {
      return Product.ratingValues.filter(comment => comment._id == commentId)
   },
})

const canReturnRatingAndComments = (getLeanProductById: (productId: ObjectId) => Promise<any>) => ({
   getProductRatingSummary: async (productId: ObjectId) => {
      const allProductRatings = await getLeanProductById(productId)
      const rateCount = allProductRatings?.ratingValues.length || 0
      let rateSum = 0
      allProductRatings?.ratingValues.map((obj: any) => {
         rateSum += obj.rating
      })
      return {
         rateCount,
         avgRating: rateSum / rateCount || 0,
      }
   },
})

const canReturnAllComments = (getRatingValues: (productId: ObjectId) => Promise<any>) => ({
   getAllComments: async (productId: ObjectId) => {
      return await getRatingValues(productId)
   },
})

const canGetProductRatingSummary = (getLeanProductById: (productId: ObjectId) => Promise<any>) => ({
   getProductRatingSummary: async (productId: ObjectId) => {
      const allProductRatings = await getLeanProductById(productId)
      const rateCount = allProductRatings?.ratingValues.length || 0
      let rateSum = 0
      allProductRatings?.ratingValues.map((obj: any) => {
         rateSum += obj.rating
      })
      return {
         rateCount,
         avgRating: rateSum / rateCount || 0,
      }
   },
})

// Save

const canRateProduct = (getProductById: (productId: ObjectId) => Promise<any>) => ({
   saveRateProductHelper: async (
      productId: ObjectId,
      rating: number,
      comment: string,
      userName: string,
      userId?: string
   ) => {
      const foundProduct = await getProductById(productId)
      let foundRatingByUser = foundProduct.ratingValues.find((ratings: any) => ratings.userId == userId)
      if (foundRatingByUser === undefined) {
         foundProduct?.ratingValues.push({
            rating,
            comment,
            userName,
            ratedAt: new Date(),
            userId,
         })
         return foundProduct
      } else return undefined
   },
})

const canLikeDislike = (getRatingValuesByProductId: (productId: ObjectId) => Promise<BaseProductType>) => ({
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

const canRemoveRating = (getRatingValuesByProductId: (productId: ObjectId) => Promise<BaseProductType>) => ({
   removeUsersRating: async (
      productId: ObjectId,
      commentIdToDelete: ObjectId,
      userId: string | undefined
   ) => {
      const foundProduct = await getRatingValuesByProductId(productId)
      if (foundProduct) {
         const updatedComments = foundProduct.ratingValues.filter(
            (rating: RatingValues) => rating._id != commentIdToDelete && rating.userId != userId
         )
         foundProduct.ratingValues = updatedComments
         foundProduct.save()
         return { message: 'Sikeresen törölted a kommented!', statusCode: 200, foundProduct }
      } else return { message: '', statusCode: 404 }
   },
})

export default function BaseRatingController(productModel: Model<any>) {
   const state: StateType = {
      productModel,
   }
   const getProductById = canReturnById(state)
   return {
      ...canReturnRatingAndComments(getProductById.getLeanProductById),
      ...canReturnAllComments(getProductById.getLeanRatingValuesByProductId),
      ...canGetProductRatingSummary(getProductById.getLeanProductById),
      ...canRateProduct(getProductById.getProductById),
      ...canLikeDislike(getProductById.getRatingValuesByProductId),
      ...canRemoveRating(getProductById.getRatingValuesByProductId),
      // Responses
      ...canSaveProductAnswer(getProductById.getRatingValuesByProductId),
      ...canRemoveProductAnswer(getProductById.getRatingValuesByProductId),
   }
}
