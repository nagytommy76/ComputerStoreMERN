import { BaseProductType, ChartDataType } from '../BaseTypes'

export type SSDProductType = BaseProductType & {
   details: SSDDetailsType
}

export type SSDDetailsType = {
   connection: string
   size: string
   capacity: number
   readingSpeed: number
   writingSpeed: number
   nandTechnology: string
   tbw: number
   warranity: number
   description?: string
   manufacturerPageUrl?: string
   chartData?: ChartDataType[]
}
