import { BaseProductType } from '../../ShopPages/BaseTypes'

export type MemoryProductType = BaseProductType & {
   details: MemoryDetailsType
}

export type MemoryDetailsType = {
   description: string
   memoryType: string
   capacity: string
   frequency: number
   latency: string
   voltage: string
   moduleNumber?: number
}
