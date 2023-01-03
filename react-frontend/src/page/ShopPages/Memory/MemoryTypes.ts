import { BaseProductType, ChartDataType } from '../../ShopPages/BaseTypes'

export type MemoryProductType = BaseProductType & {
   details: MemoryDetailsType
}

export type MemoryDetailsType = {
   manufacturerPageUrl?: string
   description: string
   memoryType: string
   capacity: number
   frequency: number
   latency: number
   voltage: string
   warranity: number
   moduleNumber?: number
   chartData?: ChartDataType[]
}
