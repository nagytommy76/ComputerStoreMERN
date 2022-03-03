import { Schema, model } from 'mongoose'
import { BaseProductType } from '../BaseTypes'
import { BaseSchemaPropertiesAndTypes } from '../Helper'

const HDDSchema = new Schema<HDDSchemaType>({
   ...BaseSchemaPropertiesAndTypes,
   details: {
      sataType: { type: Number, required: true },
      sizeInCol: { type: Number, required: true },
      capacity: { type: Number, required: true },
      rpm: { type: Number, required: true },
      cache: { type: Number, required: true },
      warranity: Number,
      description: String,
      manufacturerPageUrl: String,
   },
})

export const HddProduct = model<HDDSchemaType>('HddProduct', HDDSchema)

export type HDDDetailsType = {
   sataType: number
   sizeInCol: number
   capacity: number
   rpm: number
   cache: number
   warranity: number
   description?: string
   manufacturerPageUrl?: string
}

type HDDSchemaType = BaseProductType & {
   details: HDDDetailsType
}
