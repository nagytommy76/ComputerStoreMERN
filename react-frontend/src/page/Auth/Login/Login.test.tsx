import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import Login from './Login'

describe('Login', () => {
   beforeEach(() => {
      render(
         <Provider store={store}>
            <React.Suspense fallback={null}>
               <Login />
            </React.Suspense>
         </Provider>
      )
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
      const passwordInput = await screen.findByRole('input', { name: /Jelszó/i })
      const emailInput = await screen.findByRole('input', { name: /Email cím/i })

      userEvent.type(emailInput, 'nagytommy76')
      userEvent.type(passwordInput, 'semmi')

      userEvent.click(loginButton)
      screen.debug()
   })
})
