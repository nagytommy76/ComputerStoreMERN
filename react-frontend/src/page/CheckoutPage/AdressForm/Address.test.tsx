import { render, screen, waitForElementToBeRemoved } from '../../../test-utils'
import Adress from './Adress'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
// jest.setTimeout(10000)

const mockResolvedEmptyDetails = {
   status: 200,
   data: {
      isDetailsFilled: false,
      userDetails: null
   }
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
      // screen.debug()
      const button = screen.getByRole('button')
      userEvent.click(button)
      expect(await screen.findByText(/Csak magyar vezetékes\/vonalas telefonszám formátum lehetséges/i)).toBeInTheDocument()
      expect(screen.getByText('A(z) Vezetéknév mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A(z) Keresztnév mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A(z) Város mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A(z) Utca mező kitöltése kötelező!')).toBeInTheDocument()
      expect(screen.getByText('A házszám minimum 1 és maximum 550 lehet!')).toBeInTheDocument()
   })
})

// Tesztelni:
// 1. Ha nincs kitöltve semmi és úgy nyom rá a user a KÜLDÉS gombra
// 2. Ha ki van töltve. de hibás valami
// 3. Ha ki van töltve, sikeres minden. Megjelenik-e a módosítás gomb?!
