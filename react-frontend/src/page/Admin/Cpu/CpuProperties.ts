import { CpuProductType } from '../../ShopPages/Cpu/CpuTypes'

export const cpuProperties: CpuProductType = {
   _id: '',
   itemNumber: '',
   type: '',
   typeCode: '',
   manufacturer: '',
   price: 0,
   pictureUrls: [],
   inStockQuantity: 0,
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
      integratedGraphicsName: 'Nem',
      architecture: '',
      cpuCodeName: '',
      stockCooler: false,
      stockCoolerName: 'Nincs'
   }
}
