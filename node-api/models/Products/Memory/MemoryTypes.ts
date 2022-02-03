import { BaseProductType } from '../BaseTypes'

export type MemoryProductType = BaseProductType & {
   details: MemoryDetails
}

export type MemoryDetails = {
   memoryType: string
   capacity: string
   frequency: number
   latency: string
   voltage: string
   moduleNumber?: number
}
