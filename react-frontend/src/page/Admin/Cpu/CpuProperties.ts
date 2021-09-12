import { CpuProductType } from '../../ShopPages/Cpu/CpuTypes'

export const cpuProperties: CpuProductType = {
   itemNumber: '',
   type: '',
   typeCode: '',
   manufacturer: '',
   price: 0,
   pictureUrls: [],
   inStockQuantity: 0,
   details: {
      coreCount: 1,
      threadCount: 1,
      baseClock: 1,
      boostClock: 1,
      TDP: 1,
      l2Cache: 1,
      l3Cache: 1,
      socket: '',
      description: '',
      integratedGraphics: 'Nincs',
      integratedGraphicsName: 'Nem',
      architecture: '',
      cpuCodeName: '',
      stockCooler: false,
      stockCoolerName: 'Nincs'
   }
}
