import { screen, render, waitForElementToBeRemoved } from '../../../../test-utils'
import userEvent from '@testing-library/user-event'
import MemoryInsert from './MemoryInsert'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
// jest.setTimeout(10000)

const mockResolvedInsert = {
   status: 201,
   data: {
      msg: 'sikeres bevitel',
   },
}

describe('Testing memory insert', () => {
   test('should render some of the input fields', async () => {
      render(<MemoryInsert />)
      expect(screen.getByText(/Töltés.../i)).toBeInTheDocument()
      await waitForElementToBeRemoved(() => screen.getByText(/Töltés/i), { timeout: 5000 })
      await screen.findByRole('heading', { name: /Memória bevitele/i })
      screen.getByRole('checkbox', { name: /A termék ki legyen emelve a főoldalon/i })
      screen.getByRole('option', { name: /DDR4/i })
   })
   test('the admin should enter values into the inputs, and send to the server', async () => {
      render(<MemoryInsert />)
      const isHighlighted = await screen.findByRole('checkbox', {
         name: /A termék ki legyen emelve a főoldalon/i,
      })
      const itemNumber = await screen.findByRole('textbox', { name: /Termék szám/i })
      const typeName = screen.getByRole('textbox', { name: /Típus név/i })
      const typeCode = screen.getByRole('textbox', { name: /Típus kód/i })
      const itemManufacturer = screen.getByRole('textbox', { name: /Termék gyártó/i })
      const price = screen.getByRole('textbox', { name: /Ár/ })
      const inStockQty = screen.getByRole('textbox', { name: /Raktáron lévő mennyiség/i })
      const warranity = screen.getByRole('textbox', { name: /Garancia/i })
      const capacity = screen.getByRole('textbox', { name: /Kapacitás/i })
      const frequency = screen.getByRole('textbox', { name: /Frekvencia/i })
      const latency = screen.getByRole('textbox', { name: /Késleltetés/i })
      const voltage = screen.getByRole('textbox', { name: /Feszültség/i })
      const moduleNumber = screen.getByRole('textbox', { name: /Modulok száma/i })
      const productManPage = screen.getByRole('textbox', { name: /Gyártói honlap link/i })
      const description = screen.getByRole('textbox', { name: /Leírás/i })

      const memoryTypes = screen.getByRole('combobox')

      expect(screen.queryByRole('textbox', { name: /Kép url/i })).not.toBeInTheDocument()
      const newLinkButton = screen.getByRole('button', { name: /Új link/i })
      userEvent.click(newLinkButton)
      const linkInput = await screen.findByRole('textbox', { name: /Kép url/i })
      userEvent.type(
         linkInput,
         'https://media.icdn.hu/product/GalleryMod/2021-07/709351/resp/1675337_kingston_fury_16gb_beast_ddr4_3200mhz_cl16_kit_kf432c16bbk2_16.webp'
      )

      userEvent.type(itemNumber, 'semmi')
      userEvent.type(typeName, 'Fury 16GB Beast DDR4 3200MHz CL16 KIT')
      userEvent.type(typeCode, 'KF432C16BBK2/16')
      userEvent.type(itemManufacturer, 'KINGSTON')
      userEvent.type(price, '27990')
      userEvent.type(inStockQty, '2')
      userEvent.type(warranity, '24')
      userEvent.type(capacity, '16')
      userEvent.type(frequency, '3200')
      userEvent.type(latency, '16')
      userEvent.type(voltage, '1.35')
      userEvent.type(moduleNumber, '2')
      userEvent.type(productManPage, 'https://www.kingston.com/dataSheets/KF432C16BBK2_16.pdf')
      userEvent.type(
         description,
         '2 darab Kingston Fury, összesen 16GB DDR4 3200Mhz memória CL16 késleltetéssel.'
      )
      mockedAxios.post.mockResolvedValue(mockResolvedInsert)
      userEvent.selectOptions(memoryTypes, 'DDR4')
      userEvent.click(screen.getByRole('button', { name: /Bevitel/i }))
      expect(await screen.findByText(/sikeres bevitel/i)).toBeInTheDocument()
      // screen.getByRole('')
   }, 50000)
})
