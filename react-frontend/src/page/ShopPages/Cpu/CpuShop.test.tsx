import ReactDOM from 'react-dom'
import { render, screen, waitForElementToBeRemoved, act } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import CpuShop from './CpuShop'

import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'
jest.mock('../../../AxiosSetup/AxiosInstance')
const mockedAxios = axios as jest.Mocked<typeof axios>
jest.setTimeout(15000)

const mockResolvedFilterData = {
   status: 200,
   data: {
      allManufacturers: ['AMD', 'INTEL'],
      maxPrice: 1025000,
      minPrice: 31200,
      allSockets: ['AM4', 'LGA-1151', 'LGA-1200', 'LGA-2066', 'LGA1200', 'LGA1700', 'LGA2011-3', 'sWRX8'],
      maxBaseFrequency: 3900,
      maxCoreCount: 32,
      maxL3Cache: 128,
      maxTDP: 280,
      maxThreadCount: 64,
      maxTurboFrequency: 5200,
      minBaseFrequency: 2400,
      minCoreCount: 4,
      minL3Cache: 8,
      minTDP: 65,
      minThreadCount: 4,
      minTurboFrequency: 3400,
      _id: null,
   },
}

const mockResolvedCpuProducts = {
   status: 200,
   data: {
      allProducts: [
         {
            manufacturer: 'AMD',
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2018-04/464322/resp/979059_amd_ryzen_3_2200g_350ghz_am4_box.webp',
            ],
            price: 31200,
            ratingValues: [],
            type: 'Ryzen 3 1200',
            typeCode: 'YD1200BBAEBOX',
            _id: '6145d79d432f8737d0db1ab1',
         },
         {
            manufacturer: 'AMD',
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2018-04/464322/resp/979059_amd_ryzen_3_2200g_350ghz_am4_box.webp',
            ],
            price: 99690,
            ratingValues: [],
            type: 'Ryzen 5 5600X',
            typeCode: 'Wraith Stealth hűtő ventilátorral 100-100000065BOX',
            _id: '613e0a06f232a608d0d308cb',
         },
         {
            manufacturer: 'INTEL',
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2018-04/464322/resp/979059_amd_ryzen_3_2200g_350ghz_am4_box.webp',
            ],
            price: 135500,
            ratingValues: [],
            type: 'Core i9-11900F',
            typeCode: ' LGA-1200 BOX Intel hűtő ventilátorral',
            _id: '6145cad5432f8737d0db1a99',
         },
      ],
   },
   perPage: 12,
   totalItems: 3,
   totalPages: 1,
}
const mockResolvedFilteredCpuProducts = {
   status: 200,
   data: {
      allProducts: [
         {
            details: {},
            inStockQuantity: 0,
            isHighlighted: false,
            itemNumber: '',
            manufacturer: 'AMD',
            pictureUrls: [],
            price: 31200,
            ratingValues: [],
            type: 'Ryzen 3 1200',
            typeCode: 'YD1200BBAEBOX',
            _id: '6145d79d432f8737d0db1ab1',
         },
         {
            details: {},
            inStockQuantity: 0,
            isHighlighted: false,
            itemNumber: '',
            manufacturer: 'AMD',
            pictureUrls: [],
            price: 99690,
            ratingValues: [],
            type: 'Ryzen 5 5600X',
            typeCode: 'Wraith Stealth hűtő ventilátorral 100-100000065BOX',
            _id: '613e0a06f232a608d0d308cb',
         },
      ],
   },
   perPage: 12,
   totalItems: 2,
   totalPages: 1,
}

describe('Testing user interacting', () => {
   beforeAll(() => {
      ReactDOM.createPortal = jest.fn((element, node) => {
         return element
      }) as any
   })

   test('should display the selected manufacturer products', async () => {
      mockedAxios.get.mockResolvedValue(mockResolvedCpuProducts).mockResolvedValueOnce(mockResolvedFilterData)

      render(<CpuShop />)
      await waitForElementToBeRemoved(() => screen.getByText(/Töltés/i), { timeout: 7500 })
      await waitForElementToBeRemoved(() => screen.queryByTestId(/suspense-cards/i))

      expect(await screen.findByRole('heading', { name: /Szűrés/i })).toBeInTheDocument()
      expect(await screen.findByRole('option', { name: /Legolcsóbb elől/i })).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /Ryzen 3 1200/i })).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /Ryzen 5 5600X/i })).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /Core i9-11900F/i })).toBeInTheDocument()
      // expect(await screen.findByRole('slider', { name: /Price range/i }))
      // expect(await screen.findByLabelText(/Magok száma/i)).toBeInTheDocument()
      const option = await screen.findByRole('combobox', { name: /Foglalatok/i }, { timeout: 9500 })
      expect(option).toBeInTheDocument()
      expect(option).toHaveValue('all')

      // screen.debug()
      // screen.getByRole('')
      const selectManufacturer = await screen.findByRole('combobox', { name: /Gyártó/i })
      mockedAxios.get.mockResolvedValue(mockResolvedFilteredCpuProducts)
      userEvent.selectOptions(selectManufacturer, 'AMD')

      await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: /Core i9-11900F/i }))

      expect(await screen.findByRole('heading', { name: /Ryzen 3 1200/i })).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /Ryzen 5 5600X/i })).toBeInTheDocument()

      expect(screen.queryByRole('heading', { name: /Core i9-11900F/i })).not.toBeInTheDocument()
      // screen.debug()
   })
})
