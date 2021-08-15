import React, { useState } from 'react'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import PicUrlInput from '../../Components/InputFields/PicUrlInput/PicUrlInput'
import TextArea from '../../Components/InputFields/TextArea/TextArea'
import SubmitButton from '../../Components/InputFields/SubmitButton/SubmitButton'
import BaseInputFields from '../BaseInput/BaseInputFields'
import axios from 'axios'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { vgaProperties } from '../VgaProperties'
import { ValidationError, ValidationErrorWithAxiosError, PictureUrlType } from '../Types'

const AdminVga = () => {
   const [pictureUrls, setPictureUrls] = useState<PictureUrlType[]>([])
   const [vgaProduct, setVgaProduct] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const insertVga = async (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPicUrls = pictureUrls.map((x) => x.pictureUrl)
      await axios
         .post('admin/vga/insert', {
            vgaProduct: { ...vgaProduct, pictureUrls: filteredPicUrls }
         })
         .then((result) => {
            if (result.status === 201) setVgaProduct(vgaProperties)
         })
         .catch((error: ValidationErrorWithAxiosError) => {
            console.log(error.response?.data)
            if (error.response?.data) setValidationErrors(error.response.data.errors)
         })
   }
   return (
      <StyledForm onSubmit={insertVga}>
         <BaseInputFields setVgaProduct={setVgaProduct} vgaProduct={vgaProduct} validationErrors={validationErrors} />
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
