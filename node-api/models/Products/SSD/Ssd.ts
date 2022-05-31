import { Schema, model } from 'mongoose'
import { BaseProductType, ChartDataType } from '../BaseTypes'
import { BaseSchemaPropertiesAndTypes, ChartData } from '../Helper'

const SsdSchema = new Schema<SSDSchemaType>({
   ...BaseSchemaPropertiesAndTypes,
   details: {} as SSDDetailsType,
})

export const SsdProduct = model<SSDSchemaType>('SsdProduct', SsdSchema)

export type SSDDetailsType = {
   connection: string
   format: string
   capacity: number
   readingSpeed: number
   writingSpeed: number
   nandTechnology: string
   warranity: number
   description?: string
   manufacturerPageUrl?: string
   chartData: ChartDataType[]
}

type SSDSchemaType = BaseProductType & {
   details: SSDDetailsType
}
