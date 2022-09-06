import { MemoryProductType } from '../../ShopPages/Memory/MemoryTypes'
import { baseProperties } from '../BaseProperties'

export const memoryProperties: MemoryProductType = {
   ...baseProperties,
   details: {
      manufacturerPageUrl: '',
      warranity: 12,
      description: '',
      capacity: 8,
      frequency: 0,
      latency: 15,
      memoryType: 'DDR4',
      voltage: '1.35',
      moduleNumber: 0,
   },
}

export const MEMORY_TYPES = ['DDR', 'DDR2', 'DDR3', 'DDR4', 'DDR5']
