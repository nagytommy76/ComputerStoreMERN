import { screen, render } from '../../../../../test-utils'
import userEvent from '@testing-library/user-event'
import PicUrlInput from './PicUrlInput'
import { PictureUrlType } from '../../../Vga/Types'

// test('Should display the curren picture urls', async () => {
//    let picUrls = [
//       { id: '231232312', pictureUrl: 'link1' },
//       { id: '534656654', pictureUrl: 'link2' },
//    ] as PictureUrlType[]
//    const setPictureUrl = (currentPicture: any) => {}

//    render(<PicUrlInput pictureUrls={picUrls} setPictureUrls={setPictureUrl} />)
//    // expect(await screen.findAllByRole('textbox', { name: /Kép url/i })).toBeInTheDocument()
//    const newLinkButton = await screen.findByRole('button', { name: /Új link/i })
//    userEvent.click(newLinkButton)
//    screen.getByRole('')
// }, 5000)

test.todo('The new link button should create a new input field')
