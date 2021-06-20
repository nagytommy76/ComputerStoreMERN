import { VgaProduct, VgaDetails } from '../../../models/Vga/VgaProduct'
import { VgaDetailsType, VgaType } from '../../../models/Vga/VgaTypes'

export const createVgaProduct = async (vgaDetailsId: string): Promise<VgaType> => {
   const vga = new VgaProduct({
      itemNumber: 'GIGGEFGTX1660SUPEROC',
      type: 'GTX 1660 SUPER Gaming OC',
      typeCode: 'GV-N166SGAMING OC-6GD',
      manufacturer: 'Gigabyte',
      price: 462000,
      pictureUrls: ['képURL1', 'KépURL2'],
      details: vgaDetailsId
   })
   return await vga.save()
}

export const createVgaDetails = async (): Promise<VgaDetailsType> => {
   const vgaDetailsModel = new VgaDetails({
      gpuManufacturer: 'NVIDIA',
      pcieType: 'PCI-E 16x 4.0',
      gpuBaseClock: 1700,
      gpuPeakClock: 1860,
      vramCapacity: 6,
      vramType: 'GDDR5',
      vramBandwidth: 192,
      powerConsuption: 125,
      description: '',
      powerPin: '8-pin x 1',
      warranity: 24,
      displayPort: 2,
      DVI: 0,
      HDMI: 2
   })
   return await vgaDetailsModel.save()
}
