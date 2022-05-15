import EmailValidation from './EmailValidation'
import { render, screen } from '../../../test-utils'
import userEvent from '@testing-library/user-event'

import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'
jest.mock('../../../AxiosSetup/AxiosInstance')

const mockedAxios = axios as jest.Mocked<typeof axios>

const mockResponseRejectedJWTExpired = {
   response: {
      status: 403,
      data: {
         errorMsg: 'jwt expired',
      },
   },
}
const mockResponseRejectedJWTMalformed = {
   response: {
      status: 403,
      data: {
         errorMsg: 'jwt malformed',
      },
   },
}
const mockResponseRejectedJWTInvalid = {
   response: {
      status: 403,
      data: {
         errorMsg: 'invalid signature',
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

   test('jwt token bad format', async () => {
      render(<EmailValidation />)
      expect(await screen.findByLabelText(/Megerősítő kód/i)).toBeInTheDocument()

      mockedAxios.post.mockRejectedValue(mockResponseRejectedJWTMalformed)
      userEvent.click(await screen.findByRole('button', { name: /Megerősítés/i }))

      expect(await screen.findByText(/Nem megfelelő kód formátumot adtál meg/i)).toBeInTheDocument()
   })
   test('jwt token is invalid', async () => {
      render(<EmailValidation />)
      expect(await screen.findByLabelText(/Megerősítő kód/i)).toBeInTheDocument()

      mockedAxios.post.mockRejectedValue(mockResponseRejectedJWTInvalid)
      userEvent.click(await screen.findByRole('button', { name: /Megerősítés/i }))

      expect(await screen.findByText(/Hibás kódot adtál meg! Ellenőrizd vagy/i)).toBeInTheDocument()
   })
})
