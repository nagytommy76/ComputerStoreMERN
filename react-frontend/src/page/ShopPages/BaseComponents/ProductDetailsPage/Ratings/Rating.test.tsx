import { render, screen } from '../../../../../test-utils'
import Rating from './AddNew/Rating'
import axios from 'axios'
import { waitForElementToBeRemoved } from '@testing-library/dom'
jest.setTimeout(20000)
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('react-router', () => ({
   ...jest.requireActual('react-router'),
   useLocation: () => ({
      pathname: 'http://localhost:3000/cpu/cpu-details',
      state: {
         _id: 'sddasasd',
         productType: 'cpu'
      }
   })
}))

const mockAvgRating = {
   status: 200,
   data: {
      avgRating: 2.8333333333333335,
      rateCount: 3
   }
}

const mockGetComments = {
   status: 200,
   data: [
      {
         comment: 'Az árához képest so-so',
         ratedAt: '2021-09-28T17:09:28.765Z',
         rating: 2.5,
         userId: '614f39ce51587c3450377112',
         userName: 'senki321',
         responses: [
            { isLike: false, userId: '6134ac45824b6c129cd0859b', _id: '61535adc634bea29b4542ab1' },
            {
               isLike: true,
               userId: '60f3f0b9c7f8211424864a2c',
               _id: '6159bb7d95d8e103842d13af'
            }
         ]
      }
   ]
}

describe('Testing the ratings', () => {
   test('should render properly the existing comments', async () => {
      mockedAxios.get.mockResolvedValue(mockAvgRating).mockResolvedValue(mockGetComments)
      render(<Rating />)
      await screen.findByText('5 Stars')
      await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: /Töltés.../i }))
      //   await screen.findByRole('heading', { name: /Összesen 3 értékelés/i })
      //   screen.debug()
   })
})
