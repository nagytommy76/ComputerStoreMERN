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
   ratingCount: { type: Number, required: false },
   ratingValue: { type: Number, required: false }
})

export const CpuProduct = model<CpuProductType>('CpuProduct', CpuSchema)
