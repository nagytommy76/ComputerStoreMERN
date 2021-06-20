import { Schema, model } from 'mongoose'

export type VgaType = {
   _id: string
   itemNumber: string
   type: string
   typeCode: string
   manufacturer: string
   price: number
   pictureUrls: string[]
}
export type VgaDetailsType = {
   _id: string
   gpuManufacturer: string
   pcieType: string
   gpuBaseClock: number
   gpuPeakClock: number
   vramCapacity: number
   vramType: string
   vramBandwidth: number
   powerConsuption: number
   description: string
   powerPin: string
   warranity: number
   displayPort: number
   DVI: number
   HDMI: number
}

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
})

const VgaProduct = model<VgaType>('VgaProduct', VgaSchema)
const VgaDetails = model<VgaDetailsType>('VgaDetails', VgaDetailsSchema)

module.exports = { VgaProduct, VgaDetails }

// https://www.geeksforgeeks.org/how-to-make-mongoose-multiple-collections-using-node-js/
