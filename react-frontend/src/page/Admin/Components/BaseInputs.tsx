import React from 'react'
import { BaseInputFieldProps } from '../AdminTypes'

const TextOrNumberInput = React.lazy(() => import('./InputFields/TextOrNumberInput'))

const BaseInputs: React.FC<BaseInputFieldProps> = ({ product, setProduct, validationErrors }) => {
   return (
      <>
         <TextOrNumberInput
            required={false}
            id='itemNumber'
            labelText='Termék szám'
            value={product.itemNumber}
            onChangeEvent={(event) => setProduct({ ...product, itemNumber: event.target.value })}
         />
         <TextOrNumberInput
            id='typeName'
            labelText='Típus név'
            value={product.type || ''}
            onChangeEvent={(event) => setProduct({ ...product, type: event.target.value })}
            validationErrorLocation='type'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            required={false}
            id='typeCode'
            labelText='Típus kód'
            value={product.typeCode || ''}
            onChangeEvent={(event) => setProduct({ ...product, typeCode: event.target.value })}
         />
         <TextOrNumberInput
            id='manufacturer'
            labelText='Termék gyártó'
            value={product.manufacturer || ''}
            onChangeEvent={(event) => setProduct({ ...product, manufacturer: event.target.value })}
            validationErrorLocation='manufacturer'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='price'
            labelText='Ár'
            value={product.price || 0}
            onChangeEvent={(event) => setProduct({ ...product, price: parseInt(event.target.value) })}
            validationErrorLocation='price'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='stockQty'
            labelText='Raktáron lévő mennyiség'
            value={product.inStockQuantity || 0}
            onChangeEvent={(event) => setProduct({ ...product, inStockQuantity: parseInt(event.target.value) })}
         />
      </>
   )
}

export default BaseInputs
