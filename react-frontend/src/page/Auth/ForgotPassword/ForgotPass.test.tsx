import { render, screen, waitForElementToBeRemoved } from '../../../test-utils'
import userEvent from '@testing-library/user-event'
import ForgotPassword from './ForgotPassword'

import axios from 'axios'
const mockedAxios = axios as jest.Mocked<typeof axios>
jest.mock('axios')

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
   useParams: () => ({
      userEmail: 'nagytommy76@gmail.com',
      forgotPassToken:
         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZ3l0b21teTc2QGdtYWlsLmNvbSIsInVzZXJJZCI6IjYwZjNmMGI5YzdmODIxMTQyNDg2NGEyYyIsImlhdCI6MTY0ODc0MjMzOSwiZXhwIjoxNjQ4NzQyOTM5fQ.y7U4oXFYuicT_wuDXFGSQCDJI4Rb9JJ-pdnH_JwwEH8',
   }),
   useRouteMatch: () => ({
      url: '/forgot-password/nagytommy76@gmail.com/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hZ3l0b21teTc2QGdtYWlsLmNvbSIsInVzZXJJZCI6IjYwZjNmMGI5YzdmODIxMTQyNDg2NGEyYyIsImlhdCI6MTY0ODc0MjMzOSwiZXhwIjoxNjQ4NzQyOTM5fQ.y7U4oXFYuicT_wuDXFGSQCDJI4Rb9JJ-pdnH_JwwEH8',
   }),
}))

const mockWrongPasswordResponse = {
   response: {
      status: 422,
      data: {
         errors: [
            {
               location: 'body',
               msg: 'A két jelszó nem egyezik!',
               param: 'firstPassword',
               value: '123456',
            },
         ],
      },
   },
}

describe('Testing forgot pass controller', () => {
   it('should render the forgot pass page', async () => {
      render(<ForgotPassword />)
      await waitForElementToBeRemoved(() => screen.getByTestId('loadingSuspense'))
      expect(screen.getByText(/Elfelejtett jelszó módosítása/)).toBeInTheDocument()
   })

   it('should check the 2 password equality', async () => {
      render(<ForgotPassword />)
      const firstPassword = '12345678'
      const secondPassword = '123456789'

      const firstPasswordInput = await screen.findByLabelText(/Jelszó előszőr/i)
      const secondPasswordInput = await screen.findByLabelText(/Jelszó másodszor/i)

      userEvent.type(firstPasswordInput, firstPassword)
      userEvent.type(secondPasswordInput, secondPassword)
      mockedAxios.post.mockRejectedValueOnce(mockWrongPasswordResponse)
      userEvent.click(await screen.findByRole('button', { name: /Jelszó módosítása/i }))
      expect(await screen.findByText(/A két jelszó nem egyezik!/i)).toBeInTheDocument()
      screen.debug()
   })
})
