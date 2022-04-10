import { Schema, model } from 'mongoose'
import { BaseProductType, ChartDataType } from '../BaseTypes'
import { BaseSchemaPropertiesAndTypes, ChartData } from '../Helper'

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
}).add({ details: { chartData: ChartData } })

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
   chartData: ChartDataType[]
}

type HDDSchemaType = BaseProductType & {
   details: HDDDetailsType
}
