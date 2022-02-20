import { render, screen, waitForElementToBeRemoved } from '../../test-utils'
import userEvent from '@testing-library/user-event'
import Orders from './Orders'
import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedResolvedOrders = {
   status: 200,
   data: [
      {
         orderedAt: '2022-02-20T10:02:34.269Z',
         totalPrice: 31200,
         deliveryType: 'inStore',
         deliveryPrice: 0,
         paymentMethod: 'cashOnDelivery',
         payedAt: 0,
         _id: '621211ba0a0e4b3b543d4647',
         products: [
            {
               _id: '621211ba0a0e4b3b543d4648',
               productID: '6145d79d432f8737d0db1ab1',
               productImage:
                  'https://media.icdn.hu/product/GalleryMod/2018-04/464322/resp/979059_amd_ryzen_3_2200g_350ghz_am4_box.webp',
               productName: 'AMD Ryzen 3 1200 YD1200BBAEBOX',
               productQty: 1,
               productPrice: 31200,
            },
         ],
      },
      {
         orderedAt: '2022-02-20T09:54:28.314Z',
         totalPrice: 791840,
         deliveryType: 'inStore',
         deliveryPrice: 0,
         paymentMethod: 'cashOnDelivery',
         payedAt: 0,
         _id: '62120fd40a0e4b3b543d4624',
         products: [
            {
               _id: '62120fd40a0e4b3b543d4625',
               productID: '61ffd0090375fd2348b6469d',
               productImage:
                  'https://media.icdn.hu/product/GalleryMod/2022-01/740979/resp/1777397_kingston-fury-32gb-beast-ddr5-6000mhz-cl40-kit-kf560c40bbk2-32.webp',
               productName: 'Kingston Fury 32GB Beast DDR5 6000MHz CL40 KIT KF560C40BBK2-32',
               productQty: 1,
               productPrice: 127050,
            },
            {
               _id: '62120fd40a0e4b3b543d4626',
               productID: '6210f7a84d86c508c4cfc5f1',
               productImage:
                  'https://media.icdn.hu/product/GalleryMod/2020-12/669854/resp/1558989_asus_tuf_rx6800_o16g_gaming_rx_6800_16gb_gddr6_tuf_gaming_pcie.webp',
               productName: 'ASUS RX 6800 16GB GDDR6 TUF Gaming TUF-RX6800-O16G-GAMING',
               productQty: 1,
               productPrice: 522690,
            },
            {
               _id: '62120fd40a0e4b3b543d4627',
               productID: '614375b8cd45c22f84b74930',
               productImage: 'https://cdn.prohardver.hu/dl/cnt/2020-12/164869/5800x.jpg',
               productName: 'AMD Ryzen 5 5800X AM4 BOX 100-100000063WOF',
               productQty: 1,
               productPrice: 142100,
            },
         ],
      },
      {
         orderedAt: '2022-02-20T09:47:29.700Z',
         totalPrice: 31200,
         deliveryType: 'inStore',
         deliveryPrice: 0,
         paymentMethod: 'stripeCard',
         payedAt: 1645350450,
         _id: '62120e330a0e4b3b543d460d',
         products: [
            {
               _id: '62120e330a0e4b3b543d460e',
               productID: '6145d79d432f8737d0db1ab1',
               productImage:
                  'https://media.icdn.hu/product/GalleryMod/2018-04/464322/resp/979059_amd_ryzen_3_2200g_350ghz_am4_box.webp',
               productName: 'AMD Ryzen 3 1200 YD1200BBAEBOX',
               productQty: 1,
               productPrice: 31200,
            },
         ],
      },
   ],
}

describe('Testing last orders', () => {
   test('should display the first orders', async () => {
      mockedAxios.get.mockResolvedValue(mockedResolvedOrders)
      render(<Orders />)
      await screen.findByRole('heading', { name: /Korábbi rendelések/i })
      await screen.findByRole('heading', { name: /AMD Ryzen 3 1200 YD1200BBAEBOX/i })

      expect(
         screen.queryByRole('heading', {
            name: /Kingston Fury 32GB Beast DDR5 6000MHz CL40 KIT KF560C40BBK2-32/i,
         })
      ).not.toBeInTheDocument()
   })
   test('should display the second orders, but should hide the first one', async () => {
      mockedAxios.get.mockResolvedValue(mockedResolvedOrders)
      render(<Orders />)
      userEvent.click(await screen.findByText(/791 840 Ft/i))

      await screen.findByRole('heading', {
         name: /Kingston Fury 32GB Beast DDR5 6000MHz CL40 KIT KF560C40BBK2-32/i,
      })
      await screen.findByRole('heading', {
         name: /ASUS RX 6800 16GB GDDR6 TUF Gaming TUF-RX6800-O16G-GAMING/i,
      })
      await screen.findByRole('heading', { name: /AMD Ryzen 5 5800X AM4 BOX 100-100000063WOF/i })
   })
})
