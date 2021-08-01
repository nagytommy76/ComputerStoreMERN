import { VgaProduct } from '../../../models/Vga/VgaProduct'
import { VgaType } from '../../../models/Vga/VgaTypes'

export const createVgaProduct = async (incomingVga: VgaType): Promise<VgaType> => {
   const vga = new VgaProduct({
      itemNumber: incomingVga.itemNumber,
      type: incomingVga.type,
      typeCode: incomingVga.typeCode,
      manufacturer: incomingVga.manufacturer,
      price: incomingVga.price,
      pictureUrls: incomingVga.pictureUrls,
      details: {
         gpuManufacturer: incomingVga.details.gpuManufacturer,
         pcieType: incomingVga.details.pcieType,
         gpuBaseClock: incomingVga.details.gpuBaseClock,
         gpuPeakClock: incomingVga.details.gpuPeakClock,
         vramCapacity: incomingVga.details.vramCapacity,
         vramType: incomingVga.details.vramType,
         vramBandwidth: incomingVga.details.vramBandwidth,
         vramSpeed: incomingVga.details.vramSpeed,
         powerConsuption: incomingVga.details.powerConsuption,
         description: incomingVga.details.description,
         powerPin: incomingVga.details.powerPin,
         warranity: incomingVga.details.warranity,
         displayPort: incomingVga.details.displayPort,
         DVI: incomingVga.details.DVI,
         HDMI: incomingVga.details.HDMI,
         minPowerSupply: incomingVga.details.minPowerSupply,
         length: incomingVga.details.length,
         manufacturerPageUrl: incomingVga.details.manufacturerPageUrl,
         streamProcessors: incomingVga.details.streamProcessors
      }
   })
   return await vga.save()
}
