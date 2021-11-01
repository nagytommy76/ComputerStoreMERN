import { render, screen, act } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResponseRejectedPasswordData = {
   response: {
      data: {
         errorMessage: 'Helytelen jelszó',
         errorType: 'password',
         hasError: true,
         message: ''
      }
   }
}

const mockResponseRejectedEmailData = {
   response: {
      data: {
         errorMessage: 'Nincs regszitrálva ilyen felhasználó',
         errorType: 'email',
         hasError: true,
         message: ''
      }
   }
}

describe('Login', () => {
   beforeEach(() => {
      render(<Login />)
   })
   test('renders the login form with 2 input fields', async () => {
      await screen.findByRole('button', { name: /Belépés/i })
      await screen.findByText(/Email cím/)
      await screen.findByText(/Jelszó/)
   })

   test('should display an error message when the email input is empty', async () => {
      const loginButton = await screen.findByRole('button')
      expect(loginButton)

      userEvent.click(loginButton)

      expect(await screen.findByText(/Kérem az e-mail címet/))
   })

   test('should display an error message when the password is incorrect', async () => {
      const emailInput = screen.getByRole('textbox', { name: /Email cím/i })
      const passwordInput = screen.getByLabelText(/Jelszó/i)

      userEvent.type(emailInput, 'senki123')
      userEvent.type(passwordInput, 'semmi')

      mockedAxios.post.mockRejectedValue(mockResponseRejectedPasswordData)

      const loginButton = await screen.findByRole('button', { name: /Belépés/i })

      userEvent.click(loginButton)

      await screen.findByText(/Helytelen jelszó/i)
   })

   test('Should display an error message when the user name/email is incorrect', async () => {
      const emailInput = screen.getByRole('textbox', { name: /Email cím/i })
      const passwordInput = screen.getByLabelText(/Jelszó/i)

      userEvent.type(emailInput, 'senki123321')
      userEvent.type(passwordInput, 'semmisem')

      mockedAxios.post.mockRejectedValue(mockResponseRejectedEmailData)

      const loginButton = await screen.findByRole('button', { name: /Belépés/i })

      userEvent.click(loginButton)

      await screen.findByText(/Nincs regszitrálva ilyen felhasználó/i)
   })
})
