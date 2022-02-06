import React from 'react'
import { FormContainerStyle } from '../Components/Form/FormStyle'

const BaseFields = React.lazy(() => import('../Components/BaseInputs'))
const TextOrNumberInput = React.lazy(() => import('../Components/InputFields/TextOrNumberInput'))

const BaseInputFeilds = () => {
   return (
      <FormContainerStyle>
         {/* <BaseFields product={product} setProduct={setProduct} validationErrors={validationErrors} /> */}
         {/* <TextOrNumberInput
            id='coreCount'
            labelText='Magok Száma (db)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, coreCount: parseInt(event.target.value) } })
            }
            value={product.details.coreCount || 0}
            validationErrorLocation='details.coreCount'
            validationErrors={validationErrors}
         /> */}
         <h1>helló</h1>
      </FormContainerStyle>
   )
}

export default BaseInputFeilds
