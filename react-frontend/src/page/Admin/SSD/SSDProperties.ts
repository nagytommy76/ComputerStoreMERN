import { SSDProductType } from '../../ShopPages/SSD/SSDTypes'
import { baseProperties } from '../BaseProperties'

export const ssdProperties: SSDProductType = {
   ...baseProperties,
   details: {
      manufacturerPageUrl: '',
      warranity: 12,
      description: '',
      capacity: 0,
      connection: '',
      size: '',
      readingSpeed: 0,
      writingSpeed: 0,
      nandTechnology: '',
      tbw: 0,
   },
}

export const SSD_SIZES = ['2.5"', 'M.2 2242', 'M.2 2260', 'M.2 2280', 'mSATA']
export const SSD_CONNECTIONS = ['M.2 PCIe 3.0', 'M.2 PCIe 4.0', 'SATA3 6GB/s', 'M.2 PCIe 5.0']
export const NAND_TECHNOLOGY = ['TLC', 'MLC', 'QLC', 'SLC']
