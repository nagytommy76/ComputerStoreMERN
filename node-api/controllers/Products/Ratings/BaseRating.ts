import { Request, Response } from 'express'
import { Document, Model, ObjectId, Query } from 'mongoose'
import { BaseProductType, RatingValues } from '../../../models/Products/BaseTypes'
import { JWTUserType } from '../../Types'

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
         // A user a saját kommentjét ne tudja like/dislikeolni
         if (foundComment[0].userId == userId) {
            return {
               statusCode: 405,
               message: 'A saját kommented nem like-olhatod :)',
            } as LikeDislikeResponseType
         }
         if (foundComment[0].responses.length == 0) {
            // Ha még nincs like/dislike
            foundComment[0].responses.push({ isLike: isLike, userId })
         } else {
            // Ha van már like
            // A user adott már like/dislike-ot?
            // Ha egy user már likeolta/dislikeolta az adott commentet, nem engedem még 1*
            if (
               foundComment[0].responses.some(
                  (element: { userId?: string | undefined; isLike: boolean }) => element.userId == userId
               )
            ) {
               return { message: 'Már értékelted a kommentet', statusCode: 405 } as LikeDislikeResponseType
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
   }
}

export const getProductRatingSummary = async (productId: ObjectId, ProductModel: Model<any>) => {
   const allProductRatings = await ProductModel.findById(productId).lean()
   const rateCount = allProductRatings?.ratingValues.length || 0
   let rateSum = 0
   allProductRatings?.ratingValues.map((obj: any) => {
      rateSum += obj.rating
   })
   return {
      rateCount,
      avgRating: rateSum / rateCount || 0,
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
         userId,
      })
      return foundProduct
   } else return undefined
}

export const likeDislikeCommentHelper = async (req: LikeQuery, res: Response, ProductModel: Model<any>) => {
   // A request-ben bejön a comment/értékelés id-ja, ez alapján megtalálni
   const foundProduct = await ProductModel.findById(req.body.productId, 'ratingValues')
   if (foundProduct) {
      const foundComment = foundProduct.ratingValues.filter(
         (comment: RatingValues) => comment._id == req.body.commentId
      )

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

// Remove User's comment

export const removeUsersRatingHelper = async (
   req: RemoveRatingRequest,
   res: Response,
   ProductModel: Model<any>
) => {
   const foundProduct = await ProductModel.findById(req.body.productId, 'ratingValues')
   if (foundProduct) {
      const updatedComments = foundProduct.ratingValues.filter(
         (rating: RatingValues) => rating._id != req.body.commentIdToDelete && rating.userId != req.user?._id
      )
      foundProduct.ratingValues = updatedComments
      foundProduct.save()
      return res.status(200).json({ msg: 'Sikeresen törölted a kommented!', foundCpuProduct: foundProduct })
   } else return res.sendStatus(404)
}

export type RemoveRatingRequest = Request & {
   user?: JWTUserType | undefined
   body: {
      commentIdToDelete: string
      productId: string
   }
}

export type LikeQuery = Request & {
   user?: JWTUserType | undefined
   body: {
      isLike: boolean
      productId: string | ObjectId
      commentId: string | ObjectId
   }
}

export type RateQueryRequest = Request & {
   user?: JWTUserType
   body: {
      userName: string
      _id: ObjectId
      rating: number
      comment: string
   }
}

export type RequestQuery = Request & {
   user?: JWTUserType
   query: {
      _id: ObjectId
   }
}

export type LikeDislikeResponseType = {
   statusCode: number
   message: string
   responses?: any
}
