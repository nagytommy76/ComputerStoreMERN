import { Request } from 'express'
import { ObjectId } from 'mongoose'
import { UserTypes } from '../../../models/User/UserTypes'
import { JWTUserType } from '../../Types'

export interface RemoveRatingRequest extends Request {
   user?: JWTUserType
   body: {
      commentIdToDelete: ObjectId
      productId: ObjectId
   }
}

export interface LikeQuery extends Request {
   user?: JWTUserType
   body: {
      isLike: boolean
      productId: ObjectId
      commentId: ObjectId
      answerId?: ObjectId
   }
}

export interface RateQueryRequest extends Request {
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

export interface LikeDislikeResponseType {
   statusCode: number
   message: string
   responses?: any
}

// Responses type
export interface SaveRequestType extends Request {
   user?: UserTypes
   body: {
      productId: ObjectId
      commentId: ObjectId
      answer: string
      commentDepth: number
      parentCommentId: ObjectId
   }
}

export interface RemoveRequestType extends Request {
   user?: UserTypes
   body: {
      productId: ObjectId
      commentId: ObjectId
      answerId: ObjectId
   }
}

export interface EditRequestType extends Request {
   user?: JWTUserType
   body: {
      answerEditText: string
      productId: string
      answerId: string | null
      commentId: string
   }
}
