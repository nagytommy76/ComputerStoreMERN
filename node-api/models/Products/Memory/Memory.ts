import { Schema, model } from 'mongoose'
import { ProductRatingValuesSchema } from '../Helper'
import { MemoryProductType } from './MemoryTypes'

const MemorySchema = new Schema<MemoryProductType>({
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: Array, required: true },
   typeCode: { type: String },
   details: {
      memoryType: { type: String, required: true },
      capacity: { type: String, required: true },
      frequency: { type: Number, required: true },
      latency: { type: String, required: true },
      voltage: { type: String, required: true },
      moduleNumber: { type: Number, default: 1 },
   },
   inStockQuantity: { type: Number, default: 0 },
   isHighlighted: { type: Boolean, default: false },
   ratingValues: ProductRatingValuesSchema,
})

export const MemoryProduct = model<MemoryProductType>('MemoryProduct', MemorySchema)
