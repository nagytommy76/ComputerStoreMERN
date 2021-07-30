import React from 'react'
import { render, screen } from '../../../test.utils'
import userEvent from '@testing-library/user-event'
import Login from './Login'
import axios from 'axios'

jest.mock('axios')
const mockResponseData = {
   errorMessage: 'Helytelen jelszó',
   errorType: 'password',
   hasError: true,
   message: ''
}

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
      const loginButton = await screen.findByRole('button')
      const emailInput = await screen.findByPlaceholderText(/Email cím/i)

      const passwordInput = await screen.findByPlaceholderText(/Jelszó/i)

      userEvent.type(emailInput, 'senki123')
      userEvent.type(passwordInput, 'semmi')
      axios.get.mockResolvedValue({ data: { results: mockResponseData } })
      userEvent.click(loginButton)
      await screen.findByRole('span', { name: /Helytelen jelszó/i })
      screen.debug()
   })
})
