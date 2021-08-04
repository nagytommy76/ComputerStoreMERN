import React, { useState } from 'react'
import { StyledForm, FormContainerStyle, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
// import TextOrNumberInput from '../../Components/InputFields/TextOrNumberInput'
import PicUrlInput from '../../Components/InputFields/PicUrlInput/PicUrlInput'
import TextArea from '../../Components/InputFields/TextArea/TextArea'
import SubmitButton from '../../Components/InputFields/SubmitButton/SubmitButton'
import BaseInputFields from '../BaseInput/BaseInputFields'
import axios, { AxiosError } from 'axios'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'

export type PictureUrlType = {
   id: string
   pictureUrl: string
}

const AdminVga = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProduct, setVgaProduct] = useState<VgaType>({
      _id: '',
      itemNumber: '',
      type: '',
      typeCode: '',
      pictureUrls: [],
      manufacturer: '',
      price: 0,
      details: {
         gpuManufacturer: '',
         pcieType: '',
         gpuBaseClock: 0,
         gpuPeakClock: 0,
         vramCapacity: 0,
         vramType: '',
         vramBandwidth: 0,
         vramSpeed: 0,
         powerConsuption: 0,
         description: '',
         powerPin: '',
         warranity: 0,
         displayPort: 0,
         DVI: 0,
         HDMI: 0,
         minPowerSupply: 0,
         manufacturerPageUrl: '',
         length: 0,
         streamProcessors: 0
      }
   })

   const insertVga = (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPicUrls = pictureUrls.map((x) => x.pictureUrl)
      axios
         .post('admin/vga/insert', {
            vgaProduct: { ...vgaProduct, pictureUrls: filteredPicUrls }
         })
         .then((result) => console.log(result))
         .catch((error: AxiosError) => {
            console.log(error.response)
         })
   }
   return (
      <StyledForm onSubmit={insertVga}>
         <BaseInputFields setVgaProduct={setVgaProduct} vgaProduct={vgaProduct} />
         <FullWidhtContainerStyle>
            {/* Ez esetleg Textarea?! */}
            <TextArea
               labelText='Leírás'
               onChangeEvent={(event) =>
                  setVgaProduct({ ...vgaProduct, details: { ...vgaProduct.details, description: event.target.value } })
               }
               value={vgaProduct.details.description}
            />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <PicUrlInput setPictureUrls={setPictureUrls} pictureUrls={pictureUrls}></PicUrlInput>
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <SubmitButton buttonText='Bevitel' />
         </FullWidhtContainerStyle>
      </StyledForm>
   )
}

export default AdminVga
