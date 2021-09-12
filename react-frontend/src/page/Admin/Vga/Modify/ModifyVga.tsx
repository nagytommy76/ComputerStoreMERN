import axios from 'axios'
import React, { useState, lazy } from 'react'
import { StyledForm, FullWidhtContainerStyle } from '../../Components/Form/FormStyle'

import { vgaProperties } from '../VgaProperties'
import { VgaType } from '../../../ShopPages/Vga/VgaTypes'
import { ValidationErrorWithAxiosError, PictureUrlType } from '../Types'
import { ValidationError } from '../../AdminTypes'

const SubmitButton = lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))
const BaseInputFields = lazy(() => import('../BaseInput/BaseInputFields'))
const ProductSelector = lazy(() => import('../../Components/InputFields/ProductSelector/ProductSelector'))
const TextArea = lazy(() => import('../../Components/InputFields/TextArea/TextArea'))
const PicUrlInput = lazy(() => import('../../Components/InputFields/PicUrlInput/PicUrlInput'))

const ModifyVga = () => {
   const [selectedProductPictureUrls, setSelectedProductPictureUrls] = useState<PictureUrlType[]>([])
   const [productDetails, setProductDetails] = useState<VgaType>(vgaProperties)
   const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])

   const sendModifyRequest = async (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPictureArray = selectedProductPictureUrls.map((x) => x.pictureUrl)
      await axios
         .post('admin/vga/modify', { ...productDetails, pictureUrls: filteredPictureArray })
         .then((result) => console.log(result))
         .catch((errors: ValidationErrorWithAxiosError) => {
            if (errors.response?.data) setValidationErrors(errors.response?.data.errors)
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
