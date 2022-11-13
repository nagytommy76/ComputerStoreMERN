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

export const POWER_PINS = [
   '1 * 6pin',
   '1 * 6pin + 1 * 8pin',
   '1 * 6pin + 2 * 8pin',
   '1 * 8pin',
   '1 * 16pin',
   '2 * 8pin',
   '3 * 8pin',
]
export const VRAM_TYPES = ['GDDR6', 'GDDR6X', 'GDDR5', 'DDR4', 'HBM2']
export const PCIE_TYPE = ['PCI-E 16x 5.0', 'PCI-E 16x 4.0', 'PCI-E 16x 3.0', 'PCI-E 16x 2.0']
export const GPU_MANUFACTURERS = ['AMD', 'NVIDIA']
export const VGA_MANUFACTURERS = [
   'AMD',
   'ASROCK',
   'ASUS',
   'BIOSTAR',
   'COLORFUL',
   'EVGA',
   'GAINWARD',
   'GIGABYTE',
   'HP',
   'INNO3D',
   'KFA2',
   'LEADTEK',
   'LENOVO',
   'MANLI',
   'MSI',
   'PALIT',
   'PNY',
   'POWERCOLOR',
   'SAPPHIRE',
   'XFX',
   'ZOTAC',
]
