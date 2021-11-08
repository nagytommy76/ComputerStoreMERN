import { Request, Response } from 'express'
import { Model, ObjectId } from 'mongoose'
import { RatingValues } from '../../../models/Products/BaseTypes'
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
   let foundRatingByUser = foundProduct.ratingValues.find((ratings: any) => ratings.userId == userId)
   if (foundRatingByUser === undefined) {
      foundProduct?.ratingValues.push({
         rating,
         comment,
         userName,
         ratedAt: new Date(),
         userId
      })
      return foundProduct
   } else return undefined
}

export const likeDislikeCommentHelper = async (req: LikeQuery, res: Response, ProductModel: Model<any>) => {
   // A request-ben bejön a comment/értékelés id-ja, ez alapján megtalálni
   const foundProduct = await ProductModel.findById(req.body.productId, 'ratingValues')
   if (foundProduct) {
      const foundComment = foundProduct.ratingValues.filter((comment: RatingValues) => comment._id == req.body.commentId)

      // A user a saját kommentjét ne tudja like/dislikeolni
      if (foundComment[0].userId == req.user?._id) {
         return res.status(405).json({ message: 'A saját kommented nem like-olhatod :)' })
      }
      if (foundComment[0].responses.length == 0) {
         // Ha még nincs
         foundComment[0].responses.push({ isLike: req.body.isLike, userId: req.user?._id })
      } else {
         // Ha van már like
         // A user adott már like/dislike-ot?
         // Ha egy user már likeolta/dislikeolta az adott commentet, nem engedem még 1*
         if (
            foundComment[0].responses.some(
               (element: { userId?: string | undefined; isLike: boolean }) => element.userId == req.user?._id
            )
         ) {
            return res.status(405).json({ message: 'Már értékelted a kommentet' })
         } else foundComment[0].responses.push({ isLike: req.body.isLike, userId: req.user?._id })
      }
      foundProduct.save()
      return res.status(201).json({ responses: foundComment[0].responses })
   }
   return res.sendStatus(404)
}

export type RemoveRatingRequest = Request & {
   user?: UserTypes | undefined
   body: {
      commentIdToDelete: string
      productId: string
   }
}

export type LikeQuery = Request & {
   user?: UserTypes | undefined
   body: {
      isLike: boolean
      productId: string
      commentId: string
   }
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
