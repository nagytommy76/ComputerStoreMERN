import { VgaProduct, VgaDetails } from '../../../models/Vga/VgaProduct'
import { VgaDetailsType, VgaType } from '../../../models/Vga/VgaTypes'

export const createVgaProduct = async (vgaDetailsId: string): Promise<VgaType> => {
   const vga = new VgaProduct({
      itemNumber: 'ASRTX3070TIROGOC',
      type: 'RTX 3070 Ti 8GB GDDR6X OC',
      typeCode: 'ROG-STRIX-RTX3070TI-O8G-GAMING',
      manufacturer: 'ASUS',
      price: 438800,
      pictureUrls: [
         'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657791_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657793_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657796_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657798_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
         'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657799_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp'
      ],
      details: vgaDetailsId
   })
   return await vga.save()
}

export const createVgaDetails = async (): Promise<VgaDetailsType> => {
   const vgaDetailsModel = new VgaDetails({
      gpuManufacturer: 'Nvidia',
      pcieType: 'PCI-E 16x 4.0',
      gpuBaseClock: 1845,
      gpuPeakClock: 1875,
      vramCapacity: 8,
      vramType: 'GDDR6X',
      vramBandwidth: 256,
      vramSpeed: 19,
      powerConsuption: 318,
      description: '',
      powerPin: '8-pin x 3',
      warranity: 36,
      displayPort: 3,
      DVI: 0,
      HDMI: 2,
      minPowerSupply: 750,
      length: 318,
      manufacturerPageUrl: 'https://rog.asus.com/graphics-cards/graphics-cards/rog-strix/rog-strix-rtx3070ti-o8g-gaming-model/',
      streamProcessors: 3584
   })
   return await vgaDetailsModel.save()
}
