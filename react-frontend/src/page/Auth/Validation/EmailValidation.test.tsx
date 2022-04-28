import EmailValidation from './EmailValidation'
import { render, screen } from '../../../test-utils'
import userEvent from '@testing-library/user-event'

import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResponseRejectedJWTExpired = {
   response: {
      status: 403,
      data: {
         errorMsg: 'jwt expired',
      },
   },
}

describe('EmailValidation', () => {
   test('jwt token expired alert message', async () => {
      render(<EmailValidation />)
      expect(await screen.findByLabelText(/Megerősítő kód/i)).toBeInTheDocument()

      mockedAxios.post.mockRejectedValue(mockResponseRejectedJWTExpired)
      userEvent.click(await screen.findByRole('button', { name: /Megerősítés/i }))

      expect(await screen.findByText(/Lejárt a validációs kód!/i)).toBeInTheDocument()
   })
})