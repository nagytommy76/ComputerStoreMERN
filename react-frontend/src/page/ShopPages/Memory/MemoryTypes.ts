import { BaseProductType } from '../../ShopPages/BaseTypes'

export type MemoryProductType = BaseProductType & {
   details: MemoryDetailsType
}

export type MemoryDetailsType = {
   description: string
   memoryType: string
   capacity: number
   frequency: number
   latency: number
   voltage: number
   moduleNumber?: number
}
