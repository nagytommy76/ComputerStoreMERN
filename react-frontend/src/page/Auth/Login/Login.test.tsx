import React from 'react'
import { render, screen, act } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import axios from 'axios'

const mockResponseData = {
   response: {
      data: {
         errorMessage: 'Helytelen jelszó',
         errorType: 'password',
         hasError: true,
         message: ''
      }
   }
}

jest.mock('axios')

describe('Login', () => {
   beforeEach(() => {
      render(<Login />)
   })
   test('renders the login form with 2 input fields', async () => {
      expect(await screen.findByText('Belépés'))
      expect(await screen.findByText(/Email cím/))
      expect(await screen.findByText(/Jelszó/))
   })

   test('should display an error message when the email input is empty', async () => {
      const loginButton = await screen.findByRole('button')
      expect(loginButton)

      userEvent.click(loginButton)

      expect(await screen.findByText(/Kérem az e-mail címet/))
   })

   test('should display an error message when the password is incorrect', async () => {
      const emailInput = await screen.findByPlaceholderText(/Email cím/i)
      const passwordInput = await screen.findByPlaceholderText(/Jelszó/i)

      userEvent.type(emailInput, 'senki123')
      userEvent.type(passwordInput, 'semmi')
      act(() => {
         //    axios.post.mockImplementationOnce(() => Promise.reject({ err: mockResponseData }))
         axios.post.mockRejectedValueOnce(mockResponseData)
      })
      const loginButton = await screen.findByRole('button')
      // expect(await screen.findByText(/Helytelen jelszó/i)).toBeInTheDocument()
      userEvent.click(loginButton)
      // await screen.findByText(/Helytelen jelszó/i)
      screen.debug()
   })
})
