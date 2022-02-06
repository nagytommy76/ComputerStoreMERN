import { CpuProductType } from '../../ShopPages/Cpu/CpuTypes'
import { baseProperties } from '../BaseProperties'

export const cpuProperties: CpuProductType = {
   ...baseProperties,
   details: {
      coreCount: 0,
      threadCount: 0,
      baseClock: 0,
      boostClock: 0,
      TDP: 0,
      l2Cache: 0,
      l3Cache: 0,
      socket: '',
      warranity: 24,
      manufacturerPageUrl: '',
      description: '',
      integratedGraphicsName: 'Nincs',
      architecture: '',
      cpuCodeName: '',
      stockCooler: false,
      stockCoolerName: 'Nincs',
   },
}
