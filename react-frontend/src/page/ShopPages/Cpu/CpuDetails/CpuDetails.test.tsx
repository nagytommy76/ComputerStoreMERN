import { render, screen, waitForElementToBeRemoved } from '../../../../test-utils'
import CpuDetails from './CpuDetails'

const stateObject = {
   manufacturer: 'AMD',
   price: 31200,
   type: 'Ryzen 3 1200',
   typeCode: 'YD1200BBAEBOX',
   pictureUrls: ['https://media.icdn.hu/product/GalleryMod/2018-04/464322/resp/979059_amd_ryzen_3_2200g_350ghz_am4_box.webp'],
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
      warranity: 36
   }
}

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useLocation: () => ({
      pathname: '/cpu/cpu-details',
      search: '',
      hash: '',
      state: stateObject,
      key: '5nvxpbdafa'
   })
}))

describe('Cpu details page testing', () => {
   beforeEach(() => {
      render(<CpuDetails />)
   })
   test('should display the CPU details header without an error', async () => {
      await waitForElementToBeRemoved(() => screen.queryByTestId('detailsSuspense'))
      await screen.findByRole('heading', { name: /AMD Ryzen 3 1200 YD1200BBAEBOX/i })
   })
   // test('should display some information about the product', async () => {
   // await screen.findByRole('paragraph', { name: `${stateObject.details.warranity} hónap gyári garanciával` })
   // })
})

// test.todo('Cpu details')
