import { VgaType } from '../../ShopPages/Vga/VgaTypes'
import { baseProperties } from '../BaseProperties'

export const vgaProperties: VgaType = {
   ...baseProperties,
   details: {
      gpuManufacturer: 'AMD',
      pcieType: 'PCI-E 16x 4.0',
      gpuBaseClock: 0,
      gpuPeakClock: 0,
      vramCapacity: 0,
      vramType: 'GDDR6',
      vramBandwidth: 0,
      vramSpeed: 0,
      powerConsuption: 0,
      description: '',
      powerPin: '',
      warranity: 0,
      displayPort: 0,
      DVI: 0,
      HDMI: 0,
      minPowerSupply: 0,
      manufacturerPageUrl: '',
      length: 0,
      streamProcessors: 0,
   },
}
