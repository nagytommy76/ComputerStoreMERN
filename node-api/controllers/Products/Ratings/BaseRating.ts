import { Request } from 'express'
import { Model, ObjectId } from 'mongoose'

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
   userName: string
) => {
   const foundProduct = await ProductModel.findById(productId)
   foundProduct?.ratingValues.push({
      rating,
      comment,
      userName,
      ratedAt: new Date()
   })
   foundProduct?.save()
}

export type RateQueryRequest = Request & {
   body: {
      userName: string
      _id: ObjectId
      rating: number
      comment: string
   }
}

export type RequestQuery = Request & {
   query: {
      _id: ObjectId
   }
}
