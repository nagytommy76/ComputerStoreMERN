import { BaseProductType } from '../../ShopPages/BaseTypes'

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
   moduleNumber?: number
   warranity: number
}
