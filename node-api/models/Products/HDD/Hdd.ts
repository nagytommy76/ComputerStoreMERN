import { Schema, model } from 'mongoose'
import { BaseProductType } from '../BaseTypes'
import { BaseSchemaPropertiesAndTypes } from '../Helper'

const HDDSchema = new Schema<HDDSchemaType>({
   ...BaseSchemaPropertiesAndTypes,
   details: {
      sataType: Number,
      sizeInCol: Number,
      capacity: Number,
      rpm: Number,
      Cache: Number,
   },
})

export const HddProduct = model<HDDSchemaType>('HddProduct', HDDSchema)

type HDDSchemaType = BaseProductType & {
   details: {
      sataType: number
      sizeInCol: number
      capacity: number
      rpm: number
      cache: number
   }
}
