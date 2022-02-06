import { MemoryProductType } from '../../ShopPages/Memory/MemoryTypes'
import { baseProperties } from '../BaseProperties'

export const memoryProperties: MemoryProductType = {
   ...baseProperties,
   details: {
      manufacturerPageUrl: '',
      warranity: 12,
      description: '',
      capacity: 0,
      frequency: 0,
      latency: 0,
      memoryType: 'DDR4',
      voltage: '1.35',
      moduleNumber: 0,
   },
}
