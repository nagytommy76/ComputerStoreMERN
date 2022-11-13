import { HDDProductType } from '../../ShopPages/HDD/HDDTypes'
import { baseProperties } from '../BaseProperties'

export const hddProperties: HDDProductType = {
   ...baseProperties,
   details: {
      manufacturerPageUrl: '',
      warranity: 12,
      description: '',
      capacity: 0,
      cache: 0,
      rpm: 5400,
      sataType: 3,
      sizeInCol: 3.5,
   },
}

export const HDD_MANUFACTURERS = [
   'ADATA',
   'DELL',
   'FUJITSU',
   'HP',
   'HITACHI',
   'SILICON POWER',
   'SEAGATE',
   'TOSHIBA',
   'VERBATIM',
   'WESTERN DIGITAL',
]
