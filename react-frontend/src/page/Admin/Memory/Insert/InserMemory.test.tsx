import { screen, render, waitForElementToBeRemoved } from '../../../../test-utils'
import userEvent from '@testing-library/user-event'
import MemoryInsert from './MemoryInsert'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

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
   test('The new link button should create a new input field', async () => {
      render(<MemoryInsert />)
      const newLinkButton = screen.getByRole('button', { name: /Új link/i })
      userEvent.click(newLinkButton)
      const linkInput = await screen.findByRole('textbox', { name: /Kép URL/i })
      userEvent.type(
         linkInput,
         'https://media.icdn.hu/product/GalleryMod/2021-07/709351/resp/1675337_kingston_fury_16gb_beast_ddr4_3200mhz_cl16_kit_kf432c16bbk2_16.webp'
      )
   })
   test('the admin should enter values into the inputs, and send to the server', async () => {
      render(<MemoryInsert />)
      const isHighlighted = await screen.findByRole('checkbox', {
         name: /A termék ki legyen emelve a főoldalon/i,
      })
      const itemNumber = screen.getByRole('textbox', { name: /Termék szám/i })
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

      const memoryTypes = screen.getAllByRole('option', { name: /DDR/i })
      const linkInput = await screen.findByRole('textbox', { name: /Kép URL/i })

      //   screen.debug('')
   })
})
