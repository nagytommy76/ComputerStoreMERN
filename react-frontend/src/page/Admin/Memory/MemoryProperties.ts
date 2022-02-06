import { MemoryProductType } from '../../ShopPages/Memory/MemoryTypes'
import { baseProperties } from '../BaseProperties'

export const memoryProperties: MemoryProductType = {
   ...baseProperties,
   details: {
      description: '',
      capacity: 0,
      frequency: 0,
      latency: 0,
      memoryType: 'DDR4',
      voltage: 0,
      moduleNumber: 0,
   },
}
