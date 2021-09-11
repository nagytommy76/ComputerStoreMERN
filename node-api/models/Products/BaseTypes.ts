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
}
