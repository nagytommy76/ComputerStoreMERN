import { BaseProductType } from '../BaseTypes'
export type CpuProductType = BaseProductType & {
   details: CpuDetailsType
}

export type CpuDetailsType = {
   coreCount: number
   threadCount: number
   baseClock: number
   boostClock: number
   TDP: number
   l2Cache: number
   l3Cache: number
   socket: string
   manufacturerUrl?: string
   description?: string
   integratedGraphics?: string
   integratedGraphicsName?: string
   architecture?: string
   cpuCodeName?: string
   stockCooler?: boolean
   stockCoolerName?: string
}
