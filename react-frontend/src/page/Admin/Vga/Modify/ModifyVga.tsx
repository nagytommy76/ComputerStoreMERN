import axios from 'axios'
import React, { useState } from 'react'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'
import SubmitButton from '../../Components/InputFields/SubmitButton/SubmitButton'
import BaseInputFields from '../BaseInput/BaseInputFields'
import ProductSelector from '../../Components/InputFields/ProductSelector/ProductSelector'
import { vgaProperties } from '../VgaProperties'
import TextArea from '../../Components/InputFields/TextArea/TextArea'
import PicUrlInput from '../../Components/InputFields/PicUrlInput/PicUrlInput'
import { ValidationError, ValidationErrorWithAxiosError, PictureUrlType } from '../Types'

const ModifyVga = () => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [productDetails, setProductDetails] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const sendModifyRequest = (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPictureArray = selectedProductPictureUrls.map((x) => x.pictureUrl)
      axios
         .post('admin/vga/modify', { ...productDetails, pictureUrls: filteredPictureArray })
         .then((result) => console.log(result))
         .catch((errors: ValidationErrorWithAxiosError) => {
            if (errors.response?.data) setValidationErrors(errors.response.data.errors)
         })
   }
   return (
      <StyledForm onSubmit={sendModifyRequest}>
         <FullWidhtContainerStyle>
            <ProductSelector setDetailedProducts={setProductDetails} setPictureUrls={setSelectedProductPictureUrls} />
         </FullWidhtContainerStyle>
         <BaseInputFields vgaProduct={productDetails} setVgaProduct={setProductDetails} validationErrors={validationErrors} />
         <FullWidhtContainerStyle>
            <TextArea
               labelText='Leírás'
               value={productDetails.details.description}
               onChangeEvent={(event) =>
                  setProductDetails({
                     ...productDetails,
                     details: { ...productDetails.details, description: event.target.value }
                  })
               }
            />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <PicUrlInput setPictureUrls={setSelectedProductPictureUrls} pictureUrls={selectedProductPictureUrls} />
         </FullWidhtContainerStyle>
         <FullWidhtContainerStyle>
            <SubmitButton>Módosítás</SubmitButton>
         </FullWidhtContainerStyle>
      </StyledForm>
   )
}

export default ModifyVga
