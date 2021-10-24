import { render, screen, waitForElementToBeRemoved } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import Cpu from './Cpu'
import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResolvedFilterData = {
   status: 200,
   data: {
      allManufacturers: ['AMD', 'INTEL'],
      maxPrice: 1025000,
      minPrice: 31200,
      _id: null
   }
}

const mockResolvedCpuProducts = {
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
            _id: '6145d79d432f8737d0db1ab1'
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
            _id: '613e0a06f232a608d0d308cb'
         },
         {
            details: {},
            inStockQuantity: 0,
            isHighlighted: false,
            itemNumber: '',
            manufacturer: 'INTEL',
            pictureUrls: [],
            price: 135500,
            ratingValues: [],
            type: 'Core i9-11900F',
            typeCode: ' LGA-1200 BOX Intel hűtő ventilátorral',
            _id: '6145cad5432f8737d0db1a99'
         }
      ]
   },
   perPage: 12,
   totalItems: 3,
   totalPages: 1
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
            _id: '6145d79d432f8737d0db1ab1'
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
            _id: '613e0a06f232a608d0d308cb'
         }
      ]
   },
   perPage: 12,
   totalItems: 2,
   totalPages: 1
}

describe('Testing the proper product display', () => {
   beforeEach(async () => {
      mockedAxios.get.mockResolvedValue(mockResolvedCpuProducts).mockResolvedValueOnce(mockResolvedFilterData)
      render(<Cpu />)
      //   await waitForElementToBeRemoved(() => screen.getByTestId(/suspense-cards/i))
   })
   test('should display the filter data on the side filter', async () => {
      expect(await screen.findByRole('heading', { name: /Szűrés/i })).toBeInTheDocument()
      expect(await screen.findByRole('option', { name: /Legolcsóbb elől/i })).toBeInTheDocument()
      expect(await screen.findByRole('option', { name: /AMD/i })).toBeInTheDocument()
   })
   test('should display the products properly', async () => {
      expect(await screen.findByRole('heading', { name: /Ryzen 3 1200/i })).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /Ryzen 5 5600X/i })).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /Core i9-11900F/i })).toBeInTheDocument()
   })
   test('should display the selected manufacturer products', async () => {
      expect(await screen.findByRole('option', { name: /AMD/i })).toBeInTheDocument()
      expect(await screen.findByRole('option', { name: /INTEL/i })).toBeInTheDocument()
      const selectManufacturer = await screen.findAllByRole('combobox')
      mockedAxios.get.mockResolvedValueOnce(mockResolvedFilteredCpuProducts)

      userEvent.selectOptions(selectManufacturer[2], mockResolvedFilterData.data.allManufacturers[0])
      console.log(selectManufacturer[2].innerHTML)

      await screen.findByRole('heading', { name: /Ryzen 3 1200/i })
      expect(screen.queryByRole('heading', { name: /Core i9-11900F/i })).not.toBeInTheDocument()
      //   await screen.findByRole('heading', { name: /Ryzen 5 5600X/i })
      screen.debug()
   })
})
