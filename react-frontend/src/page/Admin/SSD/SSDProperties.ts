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
