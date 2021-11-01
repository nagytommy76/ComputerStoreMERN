import { render, screen, waitForElementToBeRemoved } from '../../../test-utils'
import Register from './Register'

describe('Register', () => {
   beforeEach(() => {
      render(<Register />)
   })
   test('should display every input and button properly', async () => {
      await screen.findByRole('heading', { name: /Regisztráció/i })
      await screen.findByRole('textbox', { name: 'Felhasználónév' })
      await screen.findByRole('textbox', { name: /Email cím\/Felhasználónév/i })
      screen.getByLabelText('Jelszó *')
      screen.getByLabelText(/Jelszó még egyszer/i)
   })
})
