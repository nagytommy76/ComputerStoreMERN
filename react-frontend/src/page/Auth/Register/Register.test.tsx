import { render, screen, waitForElementToBeRemoved } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import Register from './Register'
import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResponseRejectedEmailData = {
   response: {
      data: {
         errorMessage: 'Az email cím már regisztrálva lett',
         errorType: 'email',
         hasError: true,
         message: '',
      },
   },
}
const mockResponseRejectedPasswordData = {
   response: {
      data: {
         errors: [
            {
               location: 'body',
               msg: 'A két jelszó nem egyezik!',
               param: 'firstPassword',
               value: 'password55',
            },
         ],
      },
   },
}

describe('Register', () => {
   test('should display error message: email alredy exists', async () => {
      render(<Register />)
      await waitForElementToBeRemoved(() => screen.getByTestId('register-suspense'))

      const userName = await screen.findByRole('textbox', { name: 'Felhasználónév' })
      const email = await screen.findByRole('textbox', { name: /Email cím\/Felhasználónév/i })

      userEvent.type(userName, 'testUser123')
      userEvent.type(email, 'testUser123@gmail.com')

      const pass = screen.getByLabelText('Jelszó *')
      const pass2 = screen.getByLabelText(/Jelszó még egyszer/i)
      userEvent.type(pass, 'semmi')
      userEvent.type(pass2, 'semmi')

      mockedAxios.post.mockRejectedValue(mockResponseRejectedEmailData)

      userEvent.click(await screen.findByRole('button', { name: /Regisztráció/i }))

      expect(await screen.findByText(/Az email cím már regisztrálva lett/i)).toBeInTheDocument()
   })

   test('should display error message: 2 password not equal', async () => {
      render(<Register />)
      const userName = await screen.findByRole('textbox', { name: 'Felhasználónév' })
      const email = await screen.findByRole('textbox', { name: /Email cím\/Felhasználónév/i })

      userEvent.type(userName, 'testUser123')
      userEvent.type(email, 'testUser123@gmail.com')

      const pass = screen.getByLabelText('Jelszó *')
      const pass2 = screen.getByLabelText(/Jelszó még egyszer/i)

      userEvent.type(pass, 'semmi123456789')
      userEvent.type(pass2, 'semmi987654321')

      mockedAxios.post.mockRejectedValue(mockResponseRejectedPasswordData)

      userEvent.click(await screen.findByRole('button', { name: /Regisztráció/i }))

      expect(await screen.findByText(/A két jelszó nem egyezik!/i)).toBeInTheDocument()
   })
})
