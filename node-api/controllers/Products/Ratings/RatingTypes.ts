import { Request } from 'express'
import { ObjectId } from 'mongoose'
import { JWTUserType } from '../../Types'

export type RemoveRatingRequest = Request & {
   user?: JWTUserType
   body: {
      commentIdToDelete: ObjectId
      productId: ObjectId
   }
}

export type LikeQuery = Request & {
   user?: JWTUserType
   body: {
      isLike: boolean
      productId: ObjectId
      commentId: ObjectId
   }
}

export type RateQueryRequest = Request & {
   user?: JWTUserType
   body: {
      userName: string
      productId: ObjectId
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
