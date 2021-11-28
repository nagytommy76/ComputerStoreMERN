import React, { useState } from 'react'
import axios from 'axios'
import { PictureUrlType, ValidationErrorWithAxiosError } from '../../Vga/Types'
import { StyledForm } from '../../Components/Form/FormStyle'
import { ValidationError } from '../../AdminTypes'

const BaseForm = React.lazy(() => import('./BaseForm'))
const SubmitButton = React.lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const BaseModifyForm: React.FC<{
   mainTitle: string
   productType: string
   productInputs: any
   setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>
   selectedProductPictureUrls: PictureUrlType[]
   submitButtonText: string
}> = ({ mainTitle, productType, productInputs, setValidationErrors, selectedProductPictureUrls, submitButtonText, children }) => {
   const [inputSuccess, setInputSuccess] = useState<boolean>(false)

   const sendModifyRequest = (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPictureArray = selectedProductPictureUrls.map((x) => x.pictureUrl)
      axios
         .post(`admin/${productType}/modify`, { ...productInputs, pictureUrls: filteredPictureArray })
         .then(() => setInputSuccess(true))
         .catch((errors: ValidationErrorWithAxiosError) => {
            if (errors.response?.data) setValidationErrors(errors.response?.data.errors)
         })
   }

   return (
      <BaseForm
         alertTextAndServerity={{ serverity: 'info', text: 'Sikeres módosítás!' }}
         inputSuccess={inputSuccess}
         mainTitle={mainTitle}
         setInputSuccess={setInputSuccess}>
         <StyledForm onSubmit={sendModifyRequest}>
            {children}
            <SubmitButton>{submitButtonText}</SubmitButton>
         </StyledForm>
      </BaseForm>
   )
}

export default BaseModifyForm
