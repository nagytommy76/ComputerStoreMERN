import { render, screen } from '../../../../../test-utils'
import { render as authRender, waitFor, waitForElementToBeRemoved } from '../../../../../test-utils-auth'
import userEvent from '@testing-library/user-event'
import {
   mockAvgRating,
   mockGetCommentsToAddNew,
   mockGetCommentsToDeleteAnswer,
   mockNewCommentAnswer,
   mockWithNewComment,
} from './TestMocks'

import axios from 'axios'
import Rating from './AddNew/Rating'
import DetailsContext from '../../../Context/DetailsContext'

jest.setTimeout(27000)
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
   useParams: () => ({
      productId: '6111500be834831dd445052b',
   }),
   useRouteMatch: () => ({
      productId: '6111500be834831dd445052b',
   }),
}))

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

   test('should add a new answer to the comment', async () => {
      mockedAxios.get.mockResolvedValue(mockGetCommentsToAddNew).mockResolvedValueOnce(mockAvgRating)
      authRender(
         <DetailsContext.Provider
            value={{
               details: {},
               manufacturer: '',
               pictureUrls: [''],
               price: 0,
               productId: '6111500be834831dd445052b',
               productType: 'vga',
               type: '',
               typeCode: '',
            }}
         >
            <Rating />,
         </DetailsContext.Provider>,
         true,
         'nagytommy76',
         '60f3f0b9c7f8211424864a2c'
      )
      // await waitForElementToBeRemoved(() => screen.getByTestId('ratingSuspense'))
      // await waitForElementToBeRemoved(
      // async () => await screen.findByRole('heading', { name: /Nem érkezett még értékelés/i })
      // )
      expect(await screen.findByRole('heading', { name: /Összesen 3 értékelés/i })).toBeInTheDocument()

      // Több comment rész van azért getAllBy*
      // await waitForElementToBeRemoved(() => screen.getAllByTestId('commentSuspense'))
      expect(await screen.findByText(/Az árához képest so-so/i)).toBeInTheDocument()
      expect(await screen.findByText(/Az egy jó kártya volt a maga idejében/i)).toBeInTheDocument()
      expect(
         await screen.findByText(/Ár érték arányban nem rossz ,de a világot nem fogja megváltani/i)
      ).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /senki321/i })).toBeInTheDocument()
      expect(await screen.findByRole('heading', { name: /nagytommy76/i })).toBeInTheDocument()

      // megkeresem a válasz gombot, rákattintok majd, előjön a textarea amibe írni tudok?!
      const answerBtn = await screen.findAllByRole('button', { name: /Válasz/i })
      userEvent.click(answerBtn[0])
      const answerTextArea = await screen.findByLabelText(/Válasz üzenet senki321 részére/i)
      expect(answerTextArea).toBeInTheDocument()

      const sendAnswerBtn = await screen.findByRole('button', { name: /Válasz küldése/i })
      expect(sendAnswerBtn).toBeInTheDocument()
      userEvent.click(sendAnswerBtn)
      expect(await screen.findByText(/Kérlek írj kommentet!/i)).toBeInTheDocument()

      mockedAxios.post.mockResolvedValue(mockNewCommentAnswer)
      userEvent.type(answerTextArea, 'Teszt üzenetet küldök!!!')
      userEvent.click(sendAnswerBtn)

      expect(await screen.findByText(/A Válaszodat fogadtuk!/i)).toBeInTheDocument()
      expect(await screen.findByText(/Teszt üzenetet küldök!!!/i)).toBeInTheDocument()
   })

   test('should delete an answer', async () => {
      mockedAxios.get.mockResolvedValue(mockGetCommentsToDeleteAnswer).mockResolvedValueOnce(mockAvgRating)
      authRender(
         <DetailsContext.Provider
            value={{
               details: {},
               manufacturer: '',
               pictureUrls: [''],
               price: 0,
               productId: '6111500be834831dd445052b',
               productType: 'vga',
               type: '',
               typeCode: '',
            }}
         >
            <Rating />,
         </DetailsContext.Provider>,
         true,
         'nagytommy76',
         '60f3f0b9c7f8211424864a2c'
      )
      await waitForElementToBeRemoved(() =>
         screen.getByRole('heading', { name: /Nem érkezett még értékelés/i })
      )
      expect(await screen.findByRole('heading', { name: /Összesen 3 értékelés/i })).toBeInTheDocument()

      const removeAnswerBtn = await screen.findByRole('button', { name: /Válasz törlése/i })
      expect(
         await screen.findByText(/Ez egy teszt válasz senki321 részére, nagytommy76-tól/i)
      ).toBeInTheDocument()

      mockedAxios.delete.mockResolvedValue({
         status: 200,
         data: [
            {
               answer: 'Az egy jó kártya volt a maga idejében :)',
               answeredAt: '2021-11-15T19:28:45.924Z',
               responses: [],
               userId: '6134ac45824b6c129cd0859b',
               userName: 'senki123',
               _id: '6192b4ede1b9411844247064',
            },
         ],
      })
      userEvent.click(removeAnswerBtn)

      await waitForElementToBeRemoved(() =>
         screen.getByText(/Ez egy teszt válasz senki321 részére, nagytommy76-tól/i)
      )
      expect(await screen.findByText(/Az egy jó kártya volt a maga idejében/i)).toBeInTheDocument()
   })
})
