import { BaseProductType } from '../BaseTypes'
export type VgaType = BaseProductType & {
   details: VgaDetailsType
}
type VgaDetailsType = {
   _id: string
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
   warranity?: number
   displayPort?: number
   DVI?: number
   HDMI?: number
   minPowerSupply?: string
   length?: number
   manufacturerPageUrl?: string
   vramSpeed: number
   streamProcessors: number
}
