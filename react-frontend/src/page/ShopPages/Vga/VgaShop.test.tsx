import { render, screen, waitFor, waitForElementToBeRemoved } from '../../../test-utils'
import axios from 'axios'
import Vga from './Vga'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResolvedFilterData = {
   data: {
      allManufacturers: ['EVGA', 'MSI', 'PALIT', 'XFX', 'ASUS', 'Sapphire', 'Gigabyte'],
      maxPrice: 968000,
      minPrice: 243000
   }
}

const mockResolvedVgaProducts = {
   data: {
      allProducts: [
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
            price: 249000,
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608785_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608787_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp'
            ]
         },
         {
            details: {},
            itemNumber: 'ASUSRX6900XTO16G',
            type: 'RX 6900 XT 16GB GDDR6',
            typeCode: 'TUF-RX6900XT-O16G-GAMING',
            manufacturer: 'ASUS',
            price: 968000,
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2021-01/677078/resp/1579622_asus_tuf_rx6900xt_o16g_gaming_rx_6900_xt_16gb_gddr6_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-01/677078/resp/1579623_asus_tuf_rx6900xt_o16g_gaming_rx_6900_xt_16gb_gddr6_pcie.webp'
            ]
         }
      ],
      perPage: 2,
      totalItems: 3,
      totalPages: 2
   }
}

describe('Test Vga shop page and filter', () => {
   beforeEach(async () => {
      mockedAxios.get.mockResolvedValueOnce(mockResolvedVgaProducts)
      mockedAxios.get.mockResolvedValueOnce(mockResolvedFilterData)
      render(<Vga />)
   })
   afterEach(() => {
      jest.clearAllMocks()
   })
   test('should display the suspense page while loading, after should display the filter menu, and the cards', async () => {
      expect(screen.getByTestId('suspense-cards')).toBeInTheDocument()
      await screen.findByRole('heading', {
         name: /PALIT RTX 3060 Ti 8GB GDDR6 Dual OC/i
      })
      await screen.findByRole('heading', {
         name: /ASUS RX 6700 XT TUF Gaming 12GB/i
      })
      await screen.findByRole('heading', {
         name: /RX 6900 XT 16GB GDDR6/i
      })
      screen.debug()
   })
})