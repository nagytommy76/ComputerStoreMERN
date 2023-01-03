import { createContext } from 'react'
import { CpuDetailsType } from '../Cpu/CpuTypes'
import { HDDDetailsType } from '../HDD/HDDTypes'
import { MemoryDetailsType } from '../Memory/MemoryTypes'
import { SSDDetailsType } from '../SSD/SSDTypes'
import { VgaDetailType } from '../Vga/VgaTypes'

const DetailsContext = createContext<DetailsContextType>({
   details: {} as VgaDetailType | CpuDetailsType | MemoryDetailsType | HDDDetailsType | SSDDetailsType,
   manufacturer: '',
   pictureUrls: [''],
   price: 0,
   productId: '',
   productType: '',
   type: '',
   typeCode: '',
})

export default DetailsContext

// Ezt majd javítani: ANY.......................................................................
export type DetailsContextType = {
   productType: string
   details: VgaDetailType | CpuDetailsType | MemoryDetailsType | HDDDetailsType | SSDDetailsType | any
   productId: string
   pictureUrls: string[]
   manufacturer: string
   price: number
   type: string
   typeCode: string
}
