import { BaseProductType, ChartDataType } from '../BaseTypes'

export type VgaType = BaseProductType & {
   details: VgaDetailType
}

export type VgaDetailType = {
   gpuManufacturer: string
   pcieType: string
   gpuBaseClock: number
   gpuPeakClock: number
   vramCapacity: number
   vramType: string
   vramBandwidth: number
   powerConsuption: number
   description?: string
   powerPin?: string
   warranity: number
   displayPort?: number
   DVI?: number
   HDMI?: number
   minPowerSupply?: number
   length?: number
   manufacturerPageUrl?: string
   vramSpeed: number
   streamProcessors: number
   chartData?: ChartDataType[]
}
