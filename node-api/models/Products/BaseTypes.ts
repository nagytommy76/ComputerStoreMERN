import { ObjectId, Document } from 'mongoose'

export interface BaseProductType extends Document {
   _id: ObjectId | string
   itemNumber?: string
   type: string
   typeCode?: string
   manufacturer: string
   price: number
   pictureUrls: string[]
   inStockQuantity: number
   ratingValues: RatingValues[]
   isHighlighted?: boolean
}

export type RatingValues = {
   _id: ObjectId
   rating: number
   comment?: string
   ratedAt: Date
   userId: string
   userName: string
   responses: ResponsesType[]
   commentAnswers: CommentAnswerType[]
}

export type CommentAnswerType = {
   _id?: ObjectId
   userId: string
   userName: string
   answer: string
   answeredAt: Date
   responses: ResponsesType[]
}

export type ResponsesType = {
   _id?: string | ObjectId
   userId?: string
   isLike: boolean
}

export type ChartDataType = {
   price: number
   timestamp: number
}
