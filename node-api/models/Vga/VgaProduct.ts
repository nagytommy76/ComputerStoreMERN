import { Schema, model } from 'mongoose'
import { VgaType, VgaDetailsType } from './VgaTypes'

const VgaSchema = new Schema<VgaType>({
   itemNumber: { type: String, required: true },
   type: { type: String, required: true },
   manufacturer: { type: String, required: true },
   price: { type: Number, required: true },
   pictureUrls: { type: Array, required: true },
   details: { type: Schema.Types.ObjectId, ref: 'VgaDetails' },
   typeCode: String
})

const VgaDetailsSchema = new Schema<VgaDetailsType>({
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
   HDMI: Number
}).add({
   minPowerSupply: Number,
   length: Number,
   manufacturerPageUrl: String,
   vramSpeed: Number,
   streamProcessors: Number
})

export const VgaProduct = model<VgaType>('VgaProduct', VgaSchema)
export const VgaDetails = model<VgaDetailsType>('VgaDetails', VgaDetailsSchema)

// https://www.geeksforgeeks.org/how-to-make-mongoose-multiple-collections-using-node-js/
