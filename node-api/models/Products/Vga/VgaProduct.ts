import { Schema, model } from 'mongoose'
import { VgaType } from './VgaTypes'
import { ChartData, ProductRatingValuesSchema } from '../Helper'

const VgaSchema = new Schema<VgaType>({
   itemNumber: { type: String, required: true },
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: [String], required: true },
   details: {
      gpuManufacturer: { type: String, required: true },
      pcieType: { type: String, required: true },
      gpuBaseClock: { type: Number, required: true },
      gpuPeakClock: { type: Number, required: true },
      vramCapacity: { type: Number, required: true },
      vramType: { type: String, required: true },
      vramBandwidth: { type: Number, required: true },
      powerConsuption: { type: Number, required: true },
      description: String,
      powerPin: String,
      warranity: Number,
      displayPort: Number,
      DVI: Number,
      HDMI: Number,
      minPowerSupply: Number,
      length: Number,
      manufacturerPageUrl: String,
      vramSpeed: Number,
      streamProcessors: Number,
   },
   typeCode: String,
}).add({
   inStockQuantity: { type: Number, required: true, default: 0 },
   isHighlighted: { type: Boolean, required: false, default: false },
   ratingValues: ProductRatingValuesSchema,
   details: { chartData: ChartData },
})

export const VgaProduct = model<VgaType>('VgaProduct', VgaSchema)
// https://www.geeksforgeeks.org/how-to-make-mongoose-multiple-collections-using-node-js/
