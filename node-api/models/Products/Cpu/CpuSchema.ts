import { Schema, model } from 'mongoose'
import { CpuProductType } from './CpuTypes'

const CpuSchema = new Schema<CpuProductType>({
   itemNumber: { type: String },
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: Array, required: true },
   typeCode: { type: String },
   details: {
      coreCount: { type: Number, required: true },
      threadCount: { type: Number, required: true },
      baseClock: { type: Number, required: true },
      boostClock: { type: Number, required: true },
      TDP: { type: Number, required: true },
      l2Cache: { type: Number, required: true },
      l3Cache: { type: Number, required: true },
      socket: { type: String, required: true },
      manufacturerPageUrl: { type: String },
      description: { type: String },
      integratedGraphicsName: { type: String, default: 'Nincs' },
      architecture: { type: String },
      cpuCodeName: { type: String },
      stockCooler: { type: Boolean },
      stockCoolerName: { type: String },
      warranity: { type: Number, required: true }
   }
}).add({
   inStockQuantity: { type: Number, required: true, default: 0 },
   isHighlighted: { type: Boolean, required: false, default: false },
   ratingValues: {
      type: [
         {
            userId: { type: String, required: true },
            userName: { type: String, required: true },
            rating: { type: Number, required: true },
            ratedAt: { type: Date, required: true },
            comment: { type: String, required: false },
            responses: {
               type: [
                  {
                     userId: { type: String, required: true },
                     isLike: { type: Boolean, required: true }
                  }
               ],
               required: false
            },
            commentAnswers: {
               type: [
                  {
                     userId: { type: String, required: true },
                     userName: { type: String, required: true },
                     answer: { type: String, required: false },
                     answeredAt: { type: Date, required: true },
                     responses: {
                        type: [
                           {
                              userId: { type: String, required: true },
                              isLike: { type: Boolean, required: true }
                           }
                        ],
                        required: false
                     }
                  }
               ],
               required: false
            }
         }
      ],
      required: false
   }
})

export const CpuProduct = model<CpuProductType>('CpuProduct', CpuSchema)
