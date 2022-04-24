import React, { lazy, useContext, ReactNode } from 'react'
import { AdminContext } from '../../Context/AdminContext'

const DescriptionTextArea = lazy(() => import('../InputFields/TextArea/DescriptionTextArea'))
const PicUrlInput = lazy(() => import('../InputFields/PicUrlInput/PicUrlInput'))
const BaseInsertForm = lazy(() => import('../Form/BaseInsertForm'))
const PicUrlErrorAlert = lazy(() => import('./Include/PicUrlError'))

const BaseInsert: React.FC<{
   title: string
   productType: string
   productProperties: any
   children: ReactNode
}> = ({ children, title, productType, productProperties }) => {
   const { validationErrors, productInputs, setProductInputs } = useContext(AdminContext)
   return (
      <BaseInsertForm
         productType={productType}
         productBaseProperties={productProperties}
         mainTitle={`${title} bevitele`}
         submitButtonText='Bevitel'
      >
         {children}
         <DescriptionTextArea
            labelText='Leírás'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, description: event.target.value },
               })
            }
            value={productInputs?.details.description || ''}
         />
         <PicUrlInput />
         <PicUrlErrorAlert validationErrors={validationErrors} />
      </BaseInsertForm>
   )
}

export default BaseInsert
