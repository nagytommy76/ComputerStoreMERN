import React, { useState } from 'react'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import PicUrlInput from '../../Components/InputFields/PicUrlInput/PicUrlInput'
import TextArea from '../../Components/InputFields/TextArea/TextArea'
import SubmitButton from '../../Components/InputFields/SubmitButton/SubmitButton'
import BaseInputFields from '../BaseInput/BaseInputFields'
import axios, { AxiosError } from 'axios'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { vgaProperties } from '../VgaProperties'

export type PictureUrlType = {
   id: string
   pictureUrl: string
}

const AdminVga = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)

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
            <SubmitButton>Bevitel</SubmitButton>
         </FullWidhtContainerStyle>
      </StyledForm>
   )
}

export default AdminVga
