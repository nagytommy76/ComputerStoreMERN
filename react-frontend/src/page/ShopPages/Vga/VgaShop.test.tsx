import ReactDOM from 'react-dom'
import { render, screen, waitForElementToBeRemoved, within } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import VgaShop from './VgaShop'

import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'
jest.mock('../../../AxiosSetup/AxiosInstance')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResolvedFilterData = {
   status: 200,
   data: {
      allManufacturers: ['PALIT', 'ASUS'],
      pciType: ['PCI-E 16x 4.0'],
      vramType: ['GDDR6X', 'GDDR6'],
      gpuManufacturer: ['AMD', 'NVIDIA'],
      maxPrice: 968000,
      minPrice: 243000,
      maxBaseClock: 2548,
      maxBoostClock: 2622,
      maxLength: 332,
      maxTdp: 650,
      maxVramBandwidth: 384,
      maxVramCapacity: 16,
      minBaseClock: 1410,
      minBoostClock: 1695,
      minLength: 202,
      minTdp: 125,
      minVramBandwidth: 128,
      minVramCapacity: 6,
      _id: null,
   },
}

const mockResolvedVgaProducts = {
   status: 200,
   data: {
      allProducts: [
         {
            _id: 'iurtuijkhkjgfhkjdsfgkjsdafg4543345',
            details: {},
            itemNumber: 'PALIT3060TIOC',
            type: 'RTX 3060 Ti 8GB GDDR6 Dual OC',
            typeCode: 'NE6306TS19P2-190ADLH',
            manufacturer: 'PALIT',
            price: 243000,
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2020-12/669449/resp/1557650_palit_ne6306ts19p2_190ad_geforce_rtx_3060_ti_8gb_gddr6_dual_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2020-12/669449/resp/1557651_palit_ne6306ts19p2_190ad_geforce_rtx_3060_ti_8gb_gddr6_dual_oc_pcie.webp',
            ],
            ratingValues: [],
         },
         {
            _id: 'dbvcbvcbdfbhgfdh8788678876',
            details: {},
            itemNumber: 'ASUSRX6700XTO12G',
            type: 'RX 6700 XT TUF Gaming 12GB',
            typeCode: 'TUF-RX6700XT-O12G-GAMING',
            manufacturer: 'ASUS',
            price: 249000,
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608785_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-03/687272/resp/1608787_asus_tuf_rx6700xt_o12g_gaming_rx_6700_xt_12gb_gddr6_tuf_gaming_oc_pcie.webp',
            ],
            ratingValues: [],
         },
         {
            _id: '1223312trztzizouiopiou',
            details: {},
            itemNumber: 'ASUSRX6900XTO16G',
            type: 'RX 6900 XT 16GB GDDR6',
            typeCode: 'TUF-RX6900XT-O16G-GAMING',
            manufacturer: 'ASUS',
            price: 968000,
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2021-01/677078/resp/1579622_asus_tuf_rx6900xt_o16g_gaming_rx_6900_xt_16gb_gddr6_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-01/677078/resp/1579623_asus_tuf_rx6900xt_o16g_gaming_rx_6900_xt_16gb_gddr6_pcie.webp',
            ],
            ratingValues: [],
         },
      ],
      perPage: 2,
      totalItems: 3,
      totalPages: 2,
   },
}
const mockResolvedFilteredVgaProducts = {
   status: 200,
   data: {
      allProducts: [
         {
            _id: 'iurtuijkhkjgfhkjdsfgkjsdafg4543345',
            details: {},
            itemNumber: 'PALIT3060TIOC',
            type: 'RTX 3060 Ti 8GB GDDR6 Dual OC',
            typeCode: 'NE6306TS19P2-190ADLH',
            manufacturer: 'PALIT',
            price: 243000,
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2020-12/669449/resp/1557650_palit_ne6306ts19p2_190ad_geforce_rtx_3060_ti_8gb_gddr6_dual_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2020-12/669449/resp/1557651_palit_ne6306ts19p2_190ad_geforce_rtx_3060_ti_8gb_gddr6_dual_oc_pcie.webp',
            ],
            ratingValues: [],
         },
      ],
      perPage: 1,
      totalItems: 1,
      totalPages: 1,
   },
}

describe('Test Vga shop page', () => {
   beforeAll(() => {
      ReactDOM.createPortal = jest.fn((element, node) => {
         return element
      }) as any
   })
   test('should display the vga product cards properly', async () => {
      mockedAxios.get.mockResolvedValue(mockResolvedVgaProducts).mockResolvedValueOnce(mockResolvedFilterData)
      render(<VgaShop />)
      // setup()
      await waitForElementToBeRemoved(() => screen.getByText(/Töltés/i), { timeout: 7500 })
      await waitForElementToBeRemoved(() => screen.getByTestId('suspense-cards'), { timeout: 7500 })

      // Várni kell a komponens updatere mert különben act warning lesz... async state update-eknél...
      // Ez esetben amíg lefutnak az async call-ok ( useFilter/useGetProducts hook-ok )
      expect(await screen.findByRole('heading', { name: /Szűrés/ })).toBeInTheDocument()
      expect(await screen.findByRole('option', { name: /Legolcsóbb elől/ })).toBeInTheDocument()
      expect(
         await screen.findByRole('heading', {
            name: /PALIT RTX 3060 Ti 8GB GDDR6 Dual OC/i,
         })
      ).toBeInTheDocument()
      expect(
         await screen.findByRole('heading', {
            name: /ASUS RX 6700 XT TUF Gaming 12GB/i,
         })
      ).toBeInTheDocument()
      expect(
         await screen.findByRole('heading', {
            name: /RX 6900 XT 16GB GDDR6/i,
         })
      ).toBeInTheDocument()
      // https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue
      // https://medium.com/@moshfiqrony/how-to-write-multiple-axios-mock-implementations-in-testing-78d3b5c6a8b5
      // https://davidwcai.medium.com/react-testing-library-and-the-not-wrapped-in-act-errors-491a5629193b
   })

   test('should display only the selected manufacturer vgas', async () => {
      mockedAxios.get.mockResolvedValue(mockResolvedVgaProducts).mockResolvedValueOnce(mockResolvedFilterData)
      render(<VgaShop />)

      expect(await screen.findByRole('option', { name: /ASUS/ })).toBeInTheDocument()
      expect(await screen.findByRole('option', { name: /PALIT/ })).toBeInTheDocument()
      const manSelect = await screen.findByRole('combobox', { name: 'Gyártó' })
      mockedAxios.get.mockResolvedValue(mockResolvedFilteredVgaProducts)
      userEvent.selectOptions(manSelect, 'PALIT')
      // screen.getByRole('')
      expect(
         await screen.findByRole('heading', {
            name: /PALIT RTX 3060 Ti 8GB GDDR6 Dual OC/i,
         })
      ).toBeInTheDocument()

      await waitForElementToBeRemoved(
         () =>
            screen.getByRole('heading', {
               name: /ASUS RX 6700 XT/i,
            }),
         { timeout: 7500 }
      )
      // expect(
      //    await screen.findByRole('heading', {
      //       name: /ASUS RX 6700 XT/i,
      //    })
      // ).not.toBeInTheDocument()
   })
})
