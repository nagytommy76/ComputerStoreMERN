import { screen, render } from '../../../../../test-utils'
import userEvent from '@testing-library/user-event'
import PicUrlInput from './PicUrlInput'

test('The new link button should create a new input field', async () => {
   render(<PicUrlInput pictureUrls={[]} setPictureUrls={() => {}} />)
   expect(screen.queryByRole('textbox', { name: /Kép URL/i })).not.toBeInTheDocument()
   const newLinkButton = await screen.findByRole('button', { name: /Új link/i })
   screen.debug(newLinkButton)
   userEvent.click(newLinkButton)

   const linkInput = await screen.findByRole('textbox', { name: /Kép URL/i })
   screen.getByRole('')
   // userEvent.click(newLinkButton)
   // userEvent.type(
   //    linkInput,
   //    'https://media.icdn.hu/product/GalleryMod/2021-07/709351/resp/1675337_kingston_fury_16gb_beast_ddr4_3200mhz_cl16_kit_kf432c16bbk2_16.webp'
   // )
   // const test = await screen.findAllByRole('textbox', { name: /Kép URL/i })
   // screen.debug(test)
})
