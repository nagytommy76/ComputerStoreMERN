import React, { useState } from 'react'
import axios from 'axios'

import { StyledForm } from '../../Components/Form/FormStyle'

import { ValidationError } from '../../AdminTypes'
import { PictureUrlType, ValidationErrorWithAxiosError } from '../../Vga/Types'

const BaseForm = React.lazy(() => import('./BaseForm'))
const SubmitButton = React.lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const BaseInsertForm: React.FC<{
   mainTitle: string
   productType: string
   product: any
   setProduct: React.Dispatch<React.SetStateAction<any>>
   setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>
   pictureUrls: PictureUrlType[]
   setPictureUrls: React.Dispatch<React.SetStateAction<PictureUrlType[]>>
   productBaseProperties: any
   submitButtonText: string
}> = ({
   mainTitle,
   setProduct,
   productType,
   product,
   setValidationErrors,
   pictureUrls,
   setPictureUrls,
   productBaseProperties,
   submitButtonText,
   children,
}) => {
   const [inputSuccess, setInputSuccess] = useState<boolean>(false)

   const handleProductSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPicUrls = pictureUrls.map(x => x.pictureUrl)
      axios
         .post(`admin/${productType}/insert`, {
            ...product,
            pictureUrls: filteredPicUrls,
         })
         .then(result => {
            if (result.status === 201) {
               setInputSuccess(true)
               setProduct(productBaseProperties)
               setPictureUrls([])
            }
         })
         .catch((error: ValidationErrorWithAxiosError) => {
            if (error.response?.data) setValidationErrors(error.response.data.errors)
         })
   }

   return (
      <BaseForm inputSuccess={inputSuccess} mainTitle={mainTitle} setInputSuccess={setInputSuccess}>
         <StyledForm onSubmit={handleProductSubmit}>
            {children}
            <SubmitButton>{submitButtonText}</SubmitButton>
         </StyledForm>
      </BaseForm>
   )
}

export default BaseInsertForm
