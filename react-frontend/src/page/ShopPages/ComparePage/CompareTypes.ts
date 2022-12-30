import { VgaDetailType } from '../Vga/VgaTypes'
import { CpuDetailsType } from '../Cpu/CpuTypes'

interface BaseCompare {
   _id: string
   type: string
   typeCode?: string | undefined
   manufacturer: string
   price: number
   pictureUrls: string[]
}

export interface HeaderTypes {
   productID: string
   productDisplayName: string
   pictureUrl: string
   price: number
}

export interface VgaCompareProduct extends BaseCompare {
   details: VgaDetailType
}
export interface CpuCompareProduct extends BaseCompare {
   details: CpuDetailsType
}

export enum VgaDetailProperties {
   gpuBaseClock = 'Alap GPU Órajel',
   gpuPeakClock = 'Emelt GPU órajel',
   streamProcessors = 'Stream processzorok',
   vramBandwidth = 'VRAM sávszélesség',
   vramCapacity = 'VRAM mennyiség',
   vramSpeed = 'VRAM sebesség',
   vramType = 'VRAM típusa',
   minPowerSupply = 'Minimum ajánlott tápegység',
   powerConsuption = 'Fogyasztás (TDP)',
   powerPin = 'Tápcsatlakozók',
   pcieType = 'PCI-E típusa',
   gpuManufacturer = 'GPU gyártó',
   length = 'Hosszúság',
   DVI = 'DVI',
   HDMI = 'HDMI',
   displayPort = 'Display Portok szána',
   manufacturerPageUrl = 'Gyártói honlap',
   warranity = 'Garancia',
}

export enum CpuDetailProperties {
   coreCount = 'Magok száma',
   threadCount = 'Szálak száma',
   baseClock = 'Alap órajel',
   boostClock = 'Turbó órajel',
   TDP = 'Fogyasztás',
   architecture = 'Architektúra',
   cpuCodeName = 'CPU kódneve',
   integratedGraphicsName = 'Integrált GPU neve',
   l2Cache = 'L2 cache',
   l3Cache = 'L3 cache',
   socket = 'Foglalat',
   stockCooler = 'Gyári hűtő',
   stockCoolerName = 'Gyári hűtő neve',
   manufacturerPageUrl = 'Gyárói honlap',
   warranity = 'Garancia',
}
