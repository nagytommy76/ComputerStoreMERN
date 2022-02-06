import { MemoryProductType } from '../../ShopPages/Memory/MemoryTypes'
import { baseProperties } from '../BaseProperties'

export const memoryProperties: MemoryProductType = {
   ...baseProperties,
   details: {
      description: '',
      capacity: '',
      frequency: 0,
      latency: '',
      memoryType: '',
      voltage: '',
      moduleNumber: 0,
   },
}
