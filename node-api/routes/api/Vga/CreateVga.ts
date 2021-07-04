import { VgaProduct, VgaDetails } from '../../../models/Vga/VgaProduct'
import { VgaDetailsType, VgaType } from '../../../models/Vga/VgaTypes'

export const createVgaProduct = async (vgaDetailsId: string): Promise<VgaType> => {
   const vga = new VgaProduct({
      itemNumber: 'ASUSRX6700XTO12G',
      type: 'RX 6700 XT TUF Gaming 12GB',
      typeCode: 'TUF-RX6700XT-O12G-GAMING',
      manufacturer: 'Asus',
      price: 369800,
      pictureUrls: [
         'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608785_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608787_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608788_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608791_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608792_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608793_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608794_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp'
      ],
      details: vgaDetailsId
   })
   return await vga.save()
}

export const createVgaDetails = async (): Promise<VgaDetailsType> => {
   const vgaDetailsModel = new VgaDetails({
      gpuManufacturer: 'AMD',
      pcieType: 'PCI-E 16x 4.0',
      gpuBaseClock: 2534,
      gpuPeakClock: 2622,
      vramCapacity: 15,
      vramType: 'GDDR6',
      vramBandwidth: 192,
      vramSpeed: 16,
      powerConsuption: 230,
      description:
         'AMD RadeOn RX 6700 XT chipsettel, 12GB GDDR6 memóriával, 1 darab HDMI kimenettel, 3 darab DisplayPort kimenettel',
      powerPin: '8-pin x 2',
      warranity: 36,
      displayPort: 3,
      DVI: 0,
      HDMI: 1,
      minPowerSupply: 650,
      length: 322,
      manufacturerPageUrl: 'https://www.asus.com/Motherboards-Components/Graphics-Cards/TUF-Gaming/TUF-RX6700XT-O12G-GAMING/',
      streamProcessors: 2560
   })
   return await vgaDetailsModel.save()
}
