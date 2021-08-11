import { render, screen } from '../../../test-utils'
import axios from 'axios'
import Vga from './Vga'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResolvedVgaProducts = {
   data: [
      {
         details: {},
         itemNumber: 'PALIT3060TIOC',
         type: 'RTX 3060 Ti 8GB GDDR6 Dual OC',
         typeCode: 'NE6306TS19P2-190ADLH',
         manufacturer: 'PALIT',
         price: 243000,
         pictureUrls: [
            'https://media.icdn.hu/product/GalleryMod/2020-12/669449/resp/1557650_palit_ne6306ts19p2_190ad_geforce_rtx_3060_ti_8gb_gddr6_dual_oc_pcie.webp',
            'https://media.icdn.hu/product/GalleryMod/2020-12/669449/resp/1557651_palit_ne6306ts19p2_190ad_geforce_rtx_3060_ti_8gb_gddr6_dual_oc_pcie.webp'
         ]
      },
      {
         details: {},
         itemNumber: 'ASUSRX6700XTO12G',
         type: 'RX 6700 XT TUF Gaming 12GB',
         typeCode: 'TUF-RX6700XT-O12G-GAMING',
         manufacturer: 'ASUS',
         price: 243000,
         pictureUrls: [
            'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608785_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
            'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608787_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp'
         ]
      }
   ]
}

describe('Test Vga shop page and add to cart', () => {
   test('should display the vga cards', async () => {
      mockedAxios.get.mockResolvedValue(mockResolvedVgaProducts)
      render(<Vga />)
      await screen.findByRole('heading', {
         name: /PALIT RTX 3060 Ti 8GB GDDR6 Dual OC/i
      })
      await screen.findByRole('heading', {
         name: /ASUS RX 6700 XT TUF Gaming 12GB/i
      })
   })
})
