import { VgaDetailType } from '../Vga/VgaTypes'

export interface HeaderTypes {
   productID: string
   productDisplayName: string
   pictureUrl: string
   price: number
}

export interface VgaCompareProduct {
   _id: string
   type: string
   typeCode?: string | undefined
   manufacturer: string
   price: number
   pictureUrls: string[]
   details: VgaDetailType
}

export enum VgaDetailProperties {
   DVI = 'DVI',
   HDMI = 'HDMI',
   displayPort = 'Display Portok szána',
   gpuBaseClock = 'Alap GPU Órajel',
   gpuPeakClock = 'Emelt GPU órajel',
   gpuManufacturer = 'GPU gyártó',
   length = 'Hosszúság',
   manufacturerPageUrl = 'Gyártói honlap',
   minPowerSupply = 'Minimum ajánlott tápegység',
   pcieType = 'PCI-E típusa',
   powerConsuption = 'Fogyasztás (TDP)',
   powerPin = 'Tápcsatlakozók',
   streamProcessors = 'Stream processzorok',
   vramBandwidth = 'VRAM sávszélesség',
   vramCapacity = 'VRAM mennyiség',
   vramSpeed = 'VRAM sebesség',
   vramType = 'VRAM típusa',
   warranity = 'Garancia',
}
