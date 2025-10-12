import { Model, ObjectId } from 'mongoose'
import { canSaveProductAnswer, canRemoveProductAnswer, canEditProductAnswer } from './BaseResponse'
import { canLikeDislike } from './LikeDislike'

import { BaseProductType, RatingValues } from '../../../models/Products/BaseTypes'

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
   getRatingValuesByProductId: async (productId: ObjectId | string): Promise<BaseProductType> => {
      const product = await state.productModel.findById(productId, 'ratingValues')
      if (product !== null) {
         return product
      } else {
         return {} as BaseProductType
      }
   },
   getCommentsInFoundProduct: (Product: BaseProductType, commentId: ObjectId) => {
      return Product.ratingValues.filter((comment) => comment._id == commentId)
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
      ...canEditProductAnswer(getProductById.getRatingValuesByProductId),
   }
}
