import { render, screen, waitForElementToBeRemoved } from '../../../../test-utils'
import Adress from './Address'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResolvedEmptyDetails = {
   status: 200,
   data: {
      isDetailsFilled: false,
      userDetails: null
   }
}

const mockResolvedUserEnterValues = {
   status: 201
}

const mockRejectedUserInput = {
   response: {
      status: 422,
      data: {
         errors: [
            {
               location: 'body',
               msg: 'Csak magyar vezetékes/vonalas telefonszám formátum lehetséges',
               param: 'userDetails.phone',
               value: ''
            },
            {
               location: 'body',
               msg: 'A(z) Vezetéknév mező kitöltése kötelező!',
               param: 'userDetails.firstName',
               value: ''
            },
            {
               location: 'body',
               msg: 'A(z) Keresztnév mező kitöltése kötelező!',
               param: 'userDetails.lastName',
               value: ''
            },
            {
               location: 'body',
               msg: 'A(z) Város mező kitöltése kötelező!',
               param: 'userDetails.address.city',
               value: ''
            },
            {
               location: 'body',
               msg: 'A(z) Utca mező kitöltése kötelező!',
               param: 'userDetails.address.street',
               value: ''
            },
            {
               location: 'body',
               msg: 'A házszám minimum 1 és maximum 550 lehet!',
               param: 'userDetails.address.houseNumber',
               value: ''
            }
         ]
      }
   }
}

describe('Test the checkout page addres section', () => {
   test('should display the input fields', async () => {
      mockedAxios.get.mockResolvedValue(mockResolvedEmptyDetails)
      render(<Adress />)
      await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: /Töltés/i }))
      screen.getByRole('textbox', { name: /Vezetéknév/i })
      screen.getByRole('textbox', { name: /Keresztnév/i })
      screen.getByRole('textbox', { name: /Telefonszám/i })
      screen.getByRole('textbox', { name: /Irányítószám/i })
      screen.getByRole('textbox', { name: /Város/i })
      screen.getByRole('textbox', { name: /Utca/i })
      screen.getByRole('spinbutton', { name: /Házszám/i })
      screen.getByRole('textbox', { name: /Emelet/i })
      screen.getByRole('textbox', { name: /Ajtó/i })
      screen.getByRole('button')
   })
})

describe('Test the user events with the input fields', () => {
   test('should display any error messages', async () => {
      render(<Adress />)
      mockedAxios.post.mockRejectedValue(mockRejectedUserInput)
      const button = screen.getByRole('button')
      userEvent.click(button)
      expect(await screen.findByText(/Csak magyar vezetékes\/vonalas telefonszám formátum lehetséges/i)).toBeInTheDocument()
      expect(screen.getByText('A(z) Vezetéknév mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A(z) Keresztnév mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A(z) Város mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A(z) Utca mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A házszám minimum 1 és maximum 550 lehet!')).toBeInTheDocument()

      mockedAxios.post.mockClear()
      mockedAxios.post.mockReset()
   })
})

describe('Test the user input', () => {
   test('should display a different button when the user inputs are correct', async () => {
      render(<Adress />)
      const button = screen.getByRole('button')

      userEvent.type(screen.getByRole('textbox', { name: /Vezetéknév/i }), 'Senki')
      userEvent.type(screen.getByRole('textbox', { name: /Keresztnév/i }), 'Pista')
      userEvent.type(screen.getByRole('textbox', { name: /Telefonszám/i }), '06305773754')
      userEvent.type(screen.getByRole('textbox', { name: /Irányítószám/i }), '1119')
      userEvent.type(screen.getByRole('textbox', { name: /Város/i }), 'Budapest')
      userEvent.type(screen.getByRole('textbox', { name: /Utca/i }), 'Nemlétező utca')
      userEvent.type(screen.getByRole('spinbutton', { name: /Házszám/i }), '7')
      userEvent.type(screen.getByRole('textbox', { name: /Emelet/i }), '5')
      userEvent.type(screen.getByRole('textbox', { name: /Ajtó/i }), '17')

      mockedAxios.post.mockResolvedValue(mockResolvedUserEnterValues)
      userEvent.click(button)

      await screen.findByText(/A számlázási adatok sikeresen rögzítésre kerültek!/i)
      userEvent.click(await screen.findByRole('button', { name: /close/i }))
      await waitForElementToBeRemoved(() => screen.queryByText(/A számlázási adatok sikeresen rögzítésre kerültek!/i))
   })
})
