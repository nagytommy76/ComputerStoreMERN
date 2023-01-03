import { VgaDetailType } from '../Vga/VgaTypes'
import { CpuDetailsType } from '../Cpu/CpuTypes'
import { MemoryDetailsType } from '../Memory/MemoryTypes'
import { HDDDetailsType } from '../HDD/HDDTypes'

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
export interface RamCompareProduct extends BaseCompare {
   details: MemoryDetailsType
}
export interface HddCompareProduct extends BaseCompare {
   details: HDDDetailsType
}
