import React, { useState, useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import axios from 'axios'
import { ValidationErrorWithAxiosError } from '../../Vga/Types'
import { StyledForm } from '../../Components/Form/FormStyle'

const BaseForm = React.lazy(() => import('./BaseForm'))
const SubmitButton = React.lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const BaseModifyForm: React.FC<{
   mainTitle: string
   productType: string
   submitButtonText: string
}> = ({ mainTitle, productType, submitButtonText, children }) => {
   const [inputSuccess, setInputSuccess] = useState<boolean>(false)
   const { productInputs, selectedProductPictureUrls, setValidationErrors } = useContext(AdminContext)

   const sendModifyRequest = (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPictureArray = selectedProductPictureUrls.map(x => x.pictureUrl)
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
         setInputSuccess={setInputSuccess}
      >
         <StyledForm onSubmit={sendModifyRequest}>
            {children}
            <SubmitButton>{submitButtonText}</SubmitButton>
         </StyledForm>
      </BaseForm>
   )
}

export default BaseModifyForm
