import { ObjectId } from 'mongoose'

export type BaseProductType = {
   _id: ObjectId
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
   responses?: ResponsesType[]
}

export type ResponsesType = {
   userId?: string
   isLike: boolean
}

export type ChartDataType = {
   price: number
   timestamp: number
}
