import { axiosInstance as axios } from '../../../../AxiosSetup/AxiosInstance'
import { render, screen, waitForElementToBeRemoved } from '../../../../test-utils'
import userEvent from '@testing-library/user-event'
import ModifyVga from './ModifyVga'

jest.mock('../../../../AxiosSetup/AxiosInstance')
const mockedAxios = axios as jest.Mocked<typeof axios>

const allVgaProductResponseToModify = {
   data: {
      allProducts: [
         {
            details: {
               DVI: 0,
               HDMI: 2,
               description: '',
               displayPort: 3,
               gpuBaseClock: 1845,
               gpuManufacturer: 'Nvidia',
               gpuPeakClock: 1875,
               length: 318,
               manufacturerPageUrl:
                  'https://rog.asus.com/graphics-cards/graphics-cards/rog-strix/rog-strix-rtx3070ti-o8g-gaming-model/',
               minPowerSupply: 750,
               pcieType: 'PCI-E 16x 4.0',
               powerConsuption: 318,
               powerPin: '8-pin x 3',
               streamProcessors: 3584,
               vramBandwidth: 256,
               vramCapacity: 8,
               vramSpeed: 19,
               vramType: 'GDDR6X',
               warranity: 36,
            },
            itemNumber: 'ASRTX3070TIROGOC',
            manufacturer: 'ASUS',
            pictureUrls: [
               'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657791_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657793_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657796_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657798_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
               'https://media.icdn.hu/product/GalleryMod/2021-06/703476/resp/1657799_asus_rog_strix_rtx3070ti_o8g_gaming_rog_strix_geforce_rtx_3070_ti_8gb_gddr6x_oc_pcie.webp',
            ],
            length: 5,
            price: 438800,
            type: 'RTX 3070 Ti 8GB GDDR6X OC',
            typeCode: 'ROG-STRIX-RTX3070TI-O8G-GAMING',
            _id: '60e9796caa9879315ced55bf',
            inStockQuantity: 7,
            isHighlighted: true,
         },
      ],
   },
}

const mockRejectedValidationErrorResponse = {
   response: {
      data: {
         errors: [
            {
               location: '',
               msg: 'A(z) típus szám mező kitöltése kötelező!',
               param: 'itemNumber',
               value: '',
            },
            {
               location: '',
               msg: 'A(z) típus név mező kitöltése kötelező!',
               param: 'type',
               value: '',
            },
            {
               location: '',
               msg: 'A(z) Vga gyártó mező kitöltése kötelező!',
               param: 'manufacturer',
               value: '',
            },
            {
               location: '',
               msg: 'A(z) streamProcessors mező kitöltése kötelező!',
               param: 'details.streamProcessors',
               value: 0,
            },
         ],
      },
   },
}

test('should render the select field with the vgas and display the data from the API after user selects something', async () => {
   mockedAxios.get.mockResolvedValueOnce(allVgaProductResponseToModify)
   render(<ModifyVga />)
   await waitForElementToBeRemoved(() => screen.getByText(/Töltés/i), { timeout: 9000 })

   const options = await screen.findByRole('combobox', { name: /Termék választó/i })
   const selectOption = await screen.findByRole('option', { name: /ROG-STRIX-RTX3070TI-O8G-GAMING/i })
   expect(selectOption).toBeInTheDocument()
   userEvent.selectOptions(options, [selectOption])
   expect(selectOption).toBeTruthy()
   // screen.getByRole('')
   expect(await screen.findByRole('textbox', { name: 'Ár' })).toHaveValue(
      allVgaProductResponseToModify.data.allProducts[0].price.toString()
   )
   expect(await screen.findByRole('textbox', { name: /Termék szám/i })).toHaveValue(
      allVgaProductResponseToModify.data.allProducts[0].itemNumber
   )
   expect(await screen.findByRole('textbox', { name: /Vram sávszélesség/i })).toHaveValue(
      allVgaProductResponseToModify.data.allProducts[0].details.vramBandwidth.toString()
   )
   // should display the images related to a product
   const links = await screen.findAllByRole('link', { name: /Ugrás a képhez/i })
   expect(links[0]).toHaveAttribute('href', allVgaProductResponseToModify.data.allProducts[0].pictureUrls[0])
})

test('should add a new link element when the add new link button clikced, and it disapears after user deletes it', async () => {
   mockedAxios.get.mockResolvedValueOnce(allVgaProductResponseToModify)
   render(<ModifyVga />)
   // await waitForElementToBeRemoved(() => screen.getByText(/Töltés/i), { timeout: 9000 })
   const options = await screen.findByRole('combobox', { name: /Termék választó/i })
   const selectOption = await screen.findByRole('option', { name: /ROG-STRIX-RTX3070TI-O8G-GAMING/i })
   expect(selectOption).toBeInTheDocument()
   userEvent.selectOptions(options, [selectOption])
   expect(selectOption).toBeTruthy()

   // screen.getByRole('')
   const newLinkButton = await screen.findByRole('button', { name: /Új link/i })
   userEvent.click(newLinkButton)

   // const picUrlInputsByRemoveBtn = await screen.findAllByRole('button', { name: /Törlés/i })

   // expect(links).toHaveLength(allVgaProductResponseToModify.data.allProducts[0].pictureUrls.length + 1)

   // const allDeleteButtons = await screen.findAllByRole('button', { name: 'X' })
   // userEvent.click(allDeleteButtons[allDeleteButtons.length - 1])
   // expect(links).toHaveLength(allVgaProductResponseToModify.data.allProducts[0].pictureUrls.length)
})

// describe('Test', () => {
//    beforeEach(async () => {
//       mockedAxios.get.mockResolvedValue(allVgaProductResponseToModify)
//       render(<ModifyVga />)
//       await screen.findByRole('combobox')
//       mockedAxios.post.mockRejectedValue(mockRejectedValidationErrorResponse)
//    })
//    test('should display error messages if the user send a response with empty fields', async () => {
//       const modifyButton = await screen.findByRole('button', { name: `Módosítás` })

//       userEvent.click(modifyButton)
//       await screen.findByText(mockRejectedValidationErrorResponse.response.data.errors[0].msg)
//       await screen.findByText(mockRejectedValidationErrorResponse.response.data.errors[1].msg)
//       await screen.findByText(mockRejectedValidationErrorResponse.response.data.errors[2].msg)
//       await screen.findByText(mockRejectedValidationErrorResponse.response.data.errors[3].msg)
//    })

//    test('should disappear the warning text after user enters something', async () => {
//       const modifyButton = await screen.findByRole('button', { name: `Módosítás` })

//       userEvent.click(modifyButton)
//       const errorMsg = await screen.findByText(mockRejectedValidationErrorResponse.response.data.errors[0].msg)

//       userEvent.type(await screen.findByRole('textbox', { name: /Termék szám/i }), 'ASUS10603GB')
//       await waitFor(() => expect(errorMsg).not.toBeInTheDocument())
//    })
// })
