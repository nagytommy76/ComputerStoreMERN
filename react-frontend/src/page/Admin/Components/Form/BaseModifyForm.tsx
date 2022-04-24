import React, { useState, lazy, ReactNode } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import axios from 'axios'
import { ValidationErrorWithAxiosError } from '../../Vga/Types'
import { StyledForm } from '../../Components/Form/FormStyle'

import useAdminStates from '../../Hooks/AdminStates'

const BaseForm = React.lazy(() => import('./BaseForm'))
const SubmitButton = React.lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const ProductSelector = lazy(() => import('../InputFields/ProductSelector/ProductSelector'))
const DescriptionTextArea = lazy(() => import('../InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../InputFields/PicUrlInput/PicUrlInput'))

const BaseModifyForm: React.FC<{
   mainTitle: string
   productType: string
   submitButtonText: string
   productProperties: any
   children: ReactNode
}> = ({ mainTitle, productType, submitButtonText, productProperties, children }) => {
   const states = useAdminStates(productProperties)
   const [inputSuccess, setInputSuccess] = useState<boolean>(false)

   const sendModifyRequest = (event: React.FormEvent) => {
      event.preventDefault()
      const filteredPictureArray = states.selectedProductPictureUrls.map(x => x.pictureUrl)
      axios
         .post(`admin/${productType}/modify`, { ...states.productInputs, pictureUrls: filteredPictureArray })
         .then(() => setInputSuccess(true))
         .catch((errors: ValidationErrorWithAxiosError) => {
            if (errors.response?.data) states.setValidationErrors(errors.response?.data.errors)
         })
   }
   return (
      <AdminContext.Provider value={states}>
         <BaseForm
            alertTextAndServerity={{ serverity: 'info', text: 'Sikeres módosítás!' }}
            inputSuccess={inputSuccess}
            mainTitle={mainTitle}
            setInputSuccess={setInputSuccess}
         >
            <StyledForm onSubmit={sendModifyRequest}>
               <ProductSelector productProperties={productProperties} productType={productType} />
               {children}
               <DescriptionTextArea
                  labelText='Leírás'
                  value={states.productInputs.details.description || ''}
                  onChangeEvent={event =>
                     states.setProductInputs({
                        ...states.productInputs,
                        details: { ...states.productInputs.details, description: event.target.value },
                     })
                  }
               />
               <PicUrlInput />
               <SubmitButton>{submitButtonText}</SubmitButton>
            </StyledForm>
         </BaseForm>
      </AdminContext.Provider>
   )
}

export default BaseModifyForm
