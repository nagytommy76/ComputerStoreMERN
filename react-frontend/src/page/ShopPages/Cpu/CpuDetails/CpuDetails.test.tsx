import ReactDOM from 'react-dom'
import { render, screen, waitForElementToBeRemoved } from '../../../../test-utils'
import CpuDetails from './CpuDetails'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
jest.setTimeout(7500)

const stateObject = {
   _id: '6145d79d432f8737d0db1ab1',
   manufacturer: 'AMD',
   price: 31200,
   type: 'Ryzen 3 1200',
   typeCode: 'YD1200BBAEBOX',
   pictureUrls: [
      'https://media.icdn.hu/product/GalleryMod/2018-04/464322/resp/979059_amd_ryzen_3_2200g_350ghz_am4_box.webp',
   ],
   details: {
      TDP: 65,
      architecture: '14 nm',
      baseClock: 3100,
      boostClock: 3400,
      coreCount: 4,
      cpuCodeName: '',
      description:
         'AMD Ryzen 3 1200 3.10GHz AM4 dobozos processzor Wraith Stealth hűtővel.\n\n- Alap proci sebesség: 3.1 GHz\n- Max turbó proci sebesség: 3.4 GHz\n- L1 cache: 384 KB\n- L2 cache: 2 MB\n- L3 cache: 8 MB\n- TDP: 65 watt\n- Max. memória sebesség: 2667 MHz\n- Memória típus: DDR4\n- Memória csatorna: 2\n\nKompatibilis AM4 foglalatú alaplapok:\n\n- A320 chipset\n- B350 chipset\n- B450 chipset\n- X370 chipset\n- X470 chipset',
      integratedGraphicsName: 'Nem',
      l2Cache: 2,
      l3Cache: 8,
      manufacturerPageUrl: 'https://www.amd.com/en/products/cpu/amd-ryzen-3-1200',
      socket: 'AM4',
      stockCooler: false,
      stockCoolerName: 'Wraith Stealth',
      threadCount: 4,
      warranity: 36,
   },
}

const mockResolvedCpuRatings = {
   status: 200,
   data: {
      avgRating: 4.1666666666667,
      rateCount: 3,
   },
}
const mockResolvedCpuComments = {
   status: 200,
   data: [
      {
         comment: 'Az árához képest so-so',
         commentAnswers: [],
         ratedAt: '2021-09-28T17:09:28.765Z',
         rating: 2.5,
         responses: [
            { _id: '61535adc634bea29b4542ab1', isLike: false, userId: '6134ac45824b6c129cd0859b' },
            { _id: '6159bb7d95d8e103842d13af', isLike: true, userId: '60f3f0b9c7f8211424864a2c' },
         ],
         userId: '614f39ce51587c3450377112',
         userName: 'senki321',
         _id: '61534c48f49a34129c48c0fc',
      },
   ],
}

const mockCpuDetails = {
   status: 200,
   data: {
      productDetails: stateObject,
   },
}

describe('Cpu details page testing', () => {
   beforeEach(() => {
      ReactDOM.createPortal = jest.fn((element, node) => {
         return element
      }) as any
   })
   test('should display the CPU details without any error', async () => {
      mockedAxios.get
         .mockResolvedValueOnce(mockCpuDetails)
         .mockResolvedValue(mockResolvedCpuRatings)
         .mockResolvedValue(mockResolvedCpuComments)
      render(<CpuDetails />)
      // screen.debug()
      await waitForElementToBeRemoved(() => screen.getByTestId('detailsSuspense'), { timeout: 15000 })
      await screen.findByRole('heading', { name: /AMD Ryzen 3 1200 YD1200BBAEBOX/i })
      await screen.findByText(`${stateObject.details.warranity} hónap gyári garanciával`)
      // Table
      await screen.findByRole('cell', { name: /garancia/i })
      await screen.findByRole('cell', { name: /36 Hónap/i })

      await screen.findByRole('cell', { name: /grafikus vezérlő/i })
      await screen.findByRole('cell', { name: /nem/i })
   })
})
