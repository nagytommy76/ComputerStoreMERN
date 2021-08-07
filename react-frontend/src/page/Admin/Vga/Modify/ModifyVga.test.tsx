import React from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../../test-utils'
import ModifyVga from './ModifyVga'
jest.mock('axios')

const allVgaProductResponseToModify = {
   data: [
      {
         details: {
            DVI: 0,
            HDMI: 2,
            description: '',
            displayPort: 3,
            gpuBaseClock: 1845,
            gpuManufacturer: 'Nvidia',
            gpuPeakClock: 1875,
            length: 318,
            manufacturerPageUrl:
               'https://rog.asus.com/graphics-cards/graphics-cards/rog-strix/rog-strix-rtx3070ti-o8g-gaming-model/',
            minPowerSupply: 750,
            pcieType: 'PCI-E 16x 4.0',
            powerConsuption: 318,
            powerPin: '8-pin x 3',
            streamProcessors: 3584,
            vramBandwidth: 256,
            vramCapacity: 8,
            vramSpeed: 19,
            vramType: 'GDDR6X',
            warranity: 36
         },
         itemNumber: 'ASRTX3070TIROGOC',
         manufacturer: 'ASUS',
         pictureUrls: [
            'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657791_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
            'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657793_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
            'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657796_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
            'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657798_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
            'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657799_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp'
         ],
         length: 5,
         price: 438800,
         type: 'RTX 3070 Ti 8GB GDDR6X OC',
         typeCode: 'ROG-STRIX-RTX3070TI-O8G-GAMING',
         _id: '60e9796caa9879315ced55bf'
      }
   ]
}

describe('Modify vga (admin)', () => {
   beforeEach(async () => {
      await axios.get.mockResolvedValue(allVgaProductResponseToModify)
      render(<ModifyVga />)
   })
   test('should render the select field with the vgas', async () => {
      const options = await screen.findByRole('combobox')
      // const option = await screen.findByRole('option', { name: /ROG-STRIX-RTX3070TI-O8G-GAMING/i })

      userEvent.selectOptions(options, ['none', allVgaProductResponseToModify.data[0]._id])
      // expect(await screen.findByRole('option', { name: /ROG-STRIX-RTX3070TI-O8G-GAMING/i }).selected).toBe(true)
      // expect(options[1].selected).toBe(false)
      screen.debug()
   })
})
