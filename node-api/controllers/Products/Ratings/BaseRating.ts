import { Model, ObjectId } from 'mongoose'
import { canSaveProductAnswer, canRemoveProductAnswer } from './BaseResponse'

import { RatingValues } from '../../../models/Products/BaseTypes'
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
   getRatingValuesByProductId: async (productId: ObjectId) => {
      return await state.productModel.findById(productId, 'ratingValues')
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

const canLikeDislike = (getRatingValuesByProductId: (productId: ObjectId) => Promise<any>) => ({
   likeDislikeComment: async (
      productId: ObjectId,
      commentId: ObjectId,
      userId: string | undefined,
      isLike: boolean
   ) => {
      const foundProduct = await getRatingValuesByProductId(productId)
      if (foundProduct) {
         const foundComment = foundProduct.ratingValues.filter(
            (comment: RatingValues) => comment._id == commentId
         ) as RatingValues[]
         // A user a saj??t kommentj??t ne tudja like/dislikeolni
         if (foundComment[0].userId == userId) {
            return {
               statusCode: 405,
               message: 'A saj??t kommented nem like-olhatod :)',
            } as LikeDislikeResponseType
         }
         if (foundComment[0].responses.length == 0) {
            // Ha m??g nincs like/dislike
            foundComment[0].responses.push({ isLike: isLike, userId })
         } else {
            // Ha van m??r like
            // A user adott m??r like/dislike-ot?
            // Ha egy user m??r likeolta/dislikeolta az adott commentet, nem engedem m??g 1*
            if (
               foundComment[0].responses.some(
                  (element: { userId?: string | undefined; isLike: boolean }) => element.userId == userId
               )
            ) {
               return { message: 'M??r ??rt??kelted a kommentet', statusCode: 405 } as LikeDislikeResponseType
            } else foundComment[0].responses.push({ isLike, userId })
         }
         foundProduct.save()
         return {
            message: 'Sikeresen mentve!',
            statusCode: 201,
            responses: foundComment[0].responses,
         } as LikeDislikeResponseType
      }
      return { message: '', statusCode: 404 } as LikeDislikeResponseType
   },
})

const canRemoveRating = (getRatingValuesByProductId: (productId: ObjectId) => Promise<any>) => ({
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
         return { message: 'Sikeresen t??r??lted a kommented!', statusCode: 200, foundProduct }
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
