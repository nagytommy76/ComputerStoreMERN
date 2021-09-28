import { Request } from 'express'
import { Model, ObjectId } from 'mongoose'
import { UserTypes } from '../../../models/User/UserTypes'

export const getProductRatingSummary = async (productId: ObjectId, ProductModel: Model<any>) => {
   const allProductRatings = await ProductModel.findById(productId)
   const rateCount = allProductRatings?.ratingValues.length || 0
   let rateSum = 0
   allProductRatings?.ratingValues.map((obj: any) => {
      rateSum += obj.rating
   })
   return {
      rateCount,
      avgRating: rateSum / rateCount
   }
}

export const saveRateProductHelper = async (
   productId: ObjectId,
   ProductModel: Model<any>,
   rating: number,
   comment: string,
   userName: string,
   userId?: string
) => {
   const foundProduct = await ProductModel.findById(productId)
   foundProduct?.ratingValues.push({
      rating,
      comment,
      userName,
      ratedAt: new Date(),
      userId
   })
   foundProduct?.save()
}

export type RateQueryRequest = Request & {
   user?: UserTypes
   body: {
      userName: string
      _id: ObjectId
      rating: number
      comment: string
   }
}

export type RequestQuery = Request & {
   user?: UserTypes
   query: {
      _id: ObjectId
   }
}
