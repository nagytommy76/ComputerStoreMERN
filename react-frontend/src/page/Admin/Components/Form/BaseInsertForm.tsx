import React, { useContext, useState, ReactNode } from 'react'
import axios from 'axios'
import { AdminContext } from '../../Context/AdminContext'

import { StyledForm } from '../../Components/Form/FormStyle'
import { ValidationErrorWithAxiosError } from '../../Vga/Types'

const BaseForm = React.lazy(() => import('./BaseForm'))
const SubmitButton = React.lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const BaseInsertForm: React.FC<{
   mainTitle: string
   productType: string
   productBaseProperties: any
   submitButtonText: string
   children: ReactNode
}> = ({ mainTitle, productType, productBaseProperties, submitButtonText, children }) => {
   const [inputSuccess, setInputSuccess] = useState<boolean>(false)
   const {
      setValidationErrors,
      setProductInputs,
      productInputs,
      selectedProductPictureUrls,
      setSelectedProductPictureUrls,
   } = useContext(AdminContext)

   const handleProductSubmit = (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPicUrls = selectedProductPictureUrls.map(x => x.pictureUrl)
      axios
         .post(`admin/${productType}/insert`, {
            ...productInputs,
            pictureUrls: filteredPicUrls,
         })
         .then(result => {
            if (result.status === 201) {
               setInputSuccess(true)
               setProductInputs(productBaseProperties)
               setSelectedProductPictureUrls([])
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
