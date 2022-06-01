import { Schema, model } from 'mongoose'
import { BaseProductType, ChartDataType } from '../BaseTypes'
import { BaseSchemaPropertiesAndTypes, ChartData } from '../Helper'

const SSDSchema = new Schema<SSDSchemaType>({
   ...BaseSchemaPropertiesAndTypes,
   details: {
      capacity: { type: Number, required: true },
      connection: { type: String, required: true },
      format: { type: String, required: true },
      readingSpeed: { type: Number, required: true },
      writingSpeed: { type: Number, required: true },
      nandTechnology: { type: String, required: true },
      tbw: { type: Number, required: true },
      warranity: { type: Number, required: false },
      description: { type: String, required: false },
      manufacturerPageUrl: { type: String, required: false },
      chartData: ChartData,
   },
})

export const SSDProduct = model<SSDSchemaType>('SsdProduct', SSDSchema)

export type SSDDetailsType = {
   connection: string
   format: string
   capacity: number
   readingSpeed: number
   writingSpeed: number
   nandTechnology: string
   tbw: number
   warranity: number
   description?: string
   manufacturerPageUrl?: string
   chartData: ChartDataType[]
}

type SSDSchemaType = BaseProductType & {
   details: SSDDetailsType
}
