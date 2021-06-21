export type VgaType = {
   _id: string
   itemNumber: string
   type: string
   typeCode?: string
   manufacturer: string
   price: number
   pictureUrls: string[]
}
export type VgaDetailsType = {
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
}
