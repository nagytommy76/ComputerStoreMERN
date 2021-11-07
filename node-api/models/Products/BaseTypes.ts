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
}

export type RatingValues = {
   _id: ObjectId
   rating: number
   comment?: string
   ratedAt: Date
   userId: string
   userName: string
   usersFoundCommentToDelete?: boolean
   responses: {
      userId?: string
      isLike: boolean
   }[]
}
