// import { render as rtlRender } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { render, screen } from '../../../../../test-utils'
import { render as authRender } from '../../../../../test-utils-auth'
import Rating from './AddNew/Rating'
import axios from 'axios'
import { waitForElementToBeRemoved } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

// jest.setTimeout(20000)
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

// const mockInitialState = {
//    userLoggedIn: false,
// }
// const AuthSlice = createSlice({
//    name: 'auth',
//    initialState: mockInitialState,
//    reducers: {
//       setUserLoggedIn: (state, action: PayloadAction<boolean>) => {
//          state.userLoggedIn = action.payload
//       },
//    },
// })

// const renderComponent = (isUserLoggedIn: boolean = false) =>{
//    rtlRender(
//       <Provider store={configureStore({ reducer: { auth: AuthSlice.reducer } })}>
//          <Rating />
//       </Provider>
//    )
// }

const mockAvgRating = {
   status: 200,
   data: {
      avgRating: 2.8333333333333335,
      rateCount: 3,
   },
}

const mockGetComments = {
   status: 200,
   data: [
      {
         _id: '61534c48f49a34129c48c0fc',
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
               _id: '6159bb7d95d8e103842d13af',
            },
         ],
      },
      {
         _id: '61534c68f49a34129c48c10e',
         comment: 'Ár érték arányban nem rossz ,de a világot nem fogja megváltani :)',
         ratedAt: '2021-09-28T17:10:00.695Z',
         rating: 4.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'nagytommy76',
         responses: [
            { isLike: true, userId: '6134ac45824b6c129cd0859b', _id: '6153508d2ba2282324b2c824' },
            {
               isLike: true,
               userId: '614f39ce51587c3450377112',
               _id: '6159b51995d8e103842d132a',
            },
         ],
      },
      {
         _id: '61534c93f49a34129c48c120',
         comment: 'Olcsó húsnak híg a leve',
         ratedAt: '021-09-28T17:10:43.634Z',
         rating: 1.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'senki123',
         responses: [
            { isLike: true, userId: '614f39ce51587c3450377112', _id: '6159b4cc95d8e103842d1321' },
            {
               isLike: true,
               userId: '60f3f0b9c7f8211424864a2c',
               _id: '6159bb8495d8e103842d13b3',
            },
         ],
      },
   ],
}

const mockWithNewComment = {
   status: 200,
   data: [
      {
         _id: '61534c48f49a34129c48c0fc',
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
               _id: '6159bb7d95d8e103842d13af',
            },
         ],
      },
      {
         _id: '61534c68f49a34129c48c10e',
         comment: 'Ár érték arányban nem rossz ,de a világot nem fogja megváltani :)',
         ratedAt: '2021-09-28T17:10:00.695Z',
         rating: 4.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'nagytommy76',
         responses: [
            { isLike: true, userId: '6134ac45824b6c129cd0859b', _id: '6153508d2ba2282324b2c824' },
            {
               isLike: true,
               userId: '614f39ce51587c3450377112',
               _id: '6159b51995d8e103842d132a',
            },
         ],
      },
      {
         _id: '61534c93f49a34129c48c120',
         comment: 'Olcsó húsnak híg a leve',
         ratedAt: '021-09-28T17:10:43.634Z',
         rating: 1.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'senki123',
         responses: [
            { isLike: true, userId: '614f39ce51587c3450377112', _id: '6159b4cc95d8e103842d1321' },
            {
               isLike: true,
               userId: '60f3f0b9c7f8211424864a2c',
               _id: '6159bb8495d8e103842d13b3',
            },
         ],
      },
      {
         _id: '615hggfdrt546654fzdt645654',
         comment: 'Teszi a dolgát, nekem nagyon bejött',
         ratedAt: '021-11-07T10:10:43.634Z',
         rating: 1.5,
         userId: '60f3f0brwerewrew2c',
         userName: 'nagytommy76',
         responses: [],
      },
   ],
}

describe('Testing the ratings', () => {
   test('should render the add new comment section', async () => {
      mockedAxios.get.mockResolvedValue(mockAvgRating)
      render(<Rating />)
      await waitForElementToBeRemoved(() => screen.getByTestId(/ratingSuspense/i))
      expect(await screen.findByText('5 Stars')).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /Nem érkezett még értékelés/i })).toBeInTheDocument()
      expect(await screen.findByRole('button', { name: /Értékelés leadása/i })).toBeInTheDocument()
   })

   test('should display an error message when the user in not logged in (new comment)', async () => {
      authRender(<Rating />)
      const rateBtn = await screen.findByRole('button', { name: /Értékelés leadása/i })
      const inputField = await screen.findByRole('textbox', { name: /Hozzászólás/i })
      const selectStars = await screen.findAllByRole('radio')

      userEvent.type(inputField, 'Teszi a dolgát, nekem nagyon bejött')
      userEvent.click(selectStars[9])
      userEvent.click(rateBtn)

      expect(await screen.findByText(/Az értékeléshez kérlek jelentkezz be!/i)).toBeInTheDocument()
   })

   test('should add a new comment when the user logged in', async () => {
      authRender(<Rating />, true)
      const rateBtn = await screen.findByRole('button', { name: /Értékelés leadása/i })
      const inputField = await screen.findByRole('textbox', { name: /Hozzászólás/i })
      const selectStars = await screen.findAllByRole('radio')
      mockedAxios.post.mockResolvedValue(mockWithNewComment)
      userEvent.type(inputField, 'Teszi a dolgát, nekem nagyon bejött')
      userEvent.click(selectStars[9])
      userEvent.click(rateBtn)

      expect(await screen.findByText(/Teszi a dolgát, nekem nagyon bejött/i)).toBeInTheDocument()
   })

   // test('should add a new comment', async () => {
   // expect(
   //    screen.getByRole('heading', { name: formatDate(mockGetComments.data[0].ratedAt) })
   // ).toBeInTheDocument()
   // expect(screen.getByText(/Az árához képest so-so/i)).toBeInTheDocument()

   // expect(screen.getByRole('heading', { name: /nagytommy76/i })).toBeInTheDocument()
   // expect(
   //    screen.getByRole('heading', { name: formatDate(mockGetComments.data[1].ratedAt) })
   // ).toBeInTheDocument()
   // expect(
   //    screen.getByText(/Ár érték arányban nem rossz ,de a világot nem fogja megváltani/i)
   // ).toBeInTheDocument()

   // expect(screen.getByRole('heading', { name: /senki123/i })).toBeInTheDocument()
   // expect(
   //    screen.getByRole('heading', { name: formatDate(mockGetComments.data[2].ratedAt) })
   // ).toBeInTheDocument()
   // expect(screen.getByText(/Olcsó húsnak híg a leve/i)).toBeInTheDocument()
   // })

   // test('should add a new comment, if the user not logged in', async () => {
   //    render(<Rating />)
   //    const textInput = await screen.findByRole('textbox', { name: /Hozzászólás/i })
   //    const button = await screen.findByRole('button', { name: /Értékelés leadása/i })

   //    // mockedAxios.get.mockResolvedValue(mockAvgRating).mockResolvedValue(mockWithNewComment)
   //    userEvent.type(textInput, 'Teszi a dolgát, nekem nagyon bejött')
   //    userEvent.click(button)
   //    expect(screen.getByText(/Az értékeléshez kérlek jelentkezz be!/i)).toBeInTheDocument()
   // })
})
