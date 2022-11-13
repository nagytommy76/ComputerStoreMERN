import React from 'react'
import { BaseInputFieldProps } from '../AdminTypes'

const BaseMUISelect = React.lazy(() => import('./InputFields/Select/MUISelectFeild'))
const TextOrNumberInput = React.lazy(() => import('./InputFields/TextOrNumberInput'))
const CheckBox = React.lazy(() => import('./InputFields/CheckBox/CheckBox'))

const BaseInputs: React.FC<BaseInputFieldProps> = ({
   product,
   setProduct,
   validationErrors,
   selectableItemsArray = [],
}) => {
   return (
      <>
         <CheckBox
            checked={product.isHighlighted}
            labelText='A termék ki legyen emelve a főoldalon?'
            onChangeEvent={event => setProduct({ ...product, isHighlighted: event.target.checked })}
         />
         <TextOrNumberInput
            required={false}
            id='itemNumber'
            labelText='Termék szám'
            value={product.itemNumber}
            onChangeEvent={event => setProduct({ ...product, itemNumber: event.target.value })}
         />
         <TextOrNumberInput
            id='typeName'
            labelText='Típus név'
            value={product.type || ''}
            onChangeEvent={event => setProduct({ ...product, type: event.target.value })}
            validationErrorLocation='type'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            required={false}
            id='typeCode'
            labelText='Típus kód'
            value={product.typeCode || ''}
            onChangeEvent={event => setProduct({ ...product, typeCode: event.target.value })}
         />
         <BaseMUISelect
            id='manufacturer'
            labelText='Termék gyártó'
            selectableItems={selectableItemsArray}
            value={product.manufacturer}
            onChangeEvent={event => setProduct({ ...product, manufacturer: event.target.value })}
            validationErrors={validationErrors}
            validationErrorLocation='manufacturer'
         />
         <TextOrNumberInput
            id='price'
            labelText='Ár'
            value={product.price || 0}
            onChangeEvent={event => setProduct({ ...product, price: parseInt(event.target.value) })}
            validationErrorLocation='price'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='stockQty'
            labelText='Raktáron lévő mennyiség'
            value={product.inStockQuantity || 0}
            onChangeEvent={event => setProduct({ ...product, inStockQuantity: parseInt(event.target.value) })}
         />
      </>
   )
}

export default BaseInputs
