import { render, screen, waitForElementToBeRemoved, waitFor } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResponseRejectedPasswordData = {
   status: 403,
   response: {
      data: {
         errorMessage: 'Helytelen jelszó',
         errorType: 'password',
         hasError: true,
         message: '',
      },
   },
}

const mockResponseRejectedEmailData = {
   response: {
      data: {
         errorMessage: 'Nincs regszitrálva ilyen felhasználó',
         errorType: 'email',
         hasError: true,
         message: '',
      },
   },
}

test('should display an error message when the password is incorrect', async () => {
   render(<Login />)
   await waitForElementToBeRemoved(() => screen.getByTestId('loadingSuspense'))
   const emailInput = await screen.findByRole('textbox', { name: /Email cím/i })
   const passwordInput = await screen.findByLabelText(/Jelszó/i)

   userEvent.type(emailInput, 'senki123')
   userEvent.type(passwordInput, 'semmi')

   mockedAxios.post.mockRejectedValue(mockResponseRejectedPasswordData)

   const loginButton = await screen.findByRole('button', { name: /Belépés/i })

   userEvent.click(loginButton)

   await waitFor(() => {
      expect(screen.getByText(/Helytelen jelszó/i)).toBeInTheDocument()
   })
})

test('Should display an error message when the user name/email is incorrect', async () => {
   render(<Login />)
   const emailInput = screen.getByRole('textbox', { name: /Email cím/i })
   const passwordInput = screen.getByLabelText(/Jelszó/i)

   userEvent.type(emailInput, 'senki123321')
   userEvent.type(passwordInput, 'semmisem')

   mockedAxios.post.mockRejectedValue(mockResponseRejectedEmailData)

   const loginButton = await screen.findByRole('button', { name: /Belépés/i })

   userEvent.click(loginButton)

   await waitFor(() => {
      screen.getByText(/Nincs regszitrálva ilyen felhasználó/i)
   })
})

test('should display an alert section when the user enters a wrong pass after 2 times', async () => {
   render(<Login />)
   const emailInput = await screen.findByRole('textbox', { name: /Email cím/i })
   const passwordInput = await screen.findByLabelText(/Jelszó/i)

   userEvent.type(emailInput, 'senki123321')
   userEvent.type(passwordInput, 'semmisem')

   mockedAxios.post.mockRejectedValue(mockResponseRejectedPasswordData)

   const loginButton = await screen.findByRole('button', { name: /Belépés/i })

   userEvent.click(loginButton, undefined, { clickCount: 1 })

   await waitFor(() => {
      expect(screen.getByText(/Helytelen jelszó/i)).toBeInTheDocument()
   })
   userEvent.click(loginButton, undefined, { clickCount: 1 })

   await waitFor(async () => {
      expect(await screen.findByRole('button', { name: /Email küldése/i })).toBeInTheDocument()
   })

   // screen.debug()
})
