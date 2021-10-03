import React from 'react'
import TextOrNumberInput from './InputFields/TextOrNumberInput'
import { errorMsg } from '../../Helpers/SetErrorMsg'
import { BaseInputFieldProps } from '../AdminTypes'

const BaseInputs: React.FC<BaseInputFieldProps> = ({ product, setProduct, validationErrors }) => {
   return (
      <>
         <TextOrNumberInput
            labelText='Termék szám'
            onChangeEvent={(event) => setProduct({ ...product, itemNumber: event.target.value })}
            value={product.itemNumber || ''}
            errorMsg={errorMsg(validationErrors, 'itemNumber')}
         />
         <TextOrNumberInput
            labelText='Típus név *'
            onChangeEvent={(event) => setProduct({ ...product, type: event.target.value })}
            value={product.type || ''}
            errorMsg={errorMsg(validationErrors, 'type')}
         />
         <TextOrNumberInput
            labelText='Típus kód'
            onChangeEvent={(event) => setProduct({ ...product, typeCode: event.target.value })}
            value={product.typeCode || ''}
         />
         <TextOrNumberInput
            labelText='Termék gyártó *'
            onChangeEvent={(event) => setProduct({ ...product, manufacturer: event.target.value })}
            value={product.manufacturer || ''}
            errorMsg={errorMsg(validationErrors, 'manufacturer')}
         />
         <TextOrNumberInput
            inputType='number'
            labelText='Ár *'
            onChangeEvent={(event) => setProduct({ ...product, price: parseInt(event.target.value) })}
            value={product.price || 0}
            errorMsg={errorMsg(validationErrors, 'price')}
         />
         <TextOrNumberInput
            inputType='number'
            labelText='Raktáron lévő mennyiség'
            onChangeEvent={(event) => setProduct({ ...product, inStockQuantity: parseInt(event.target.value) })}
            value={product.inStockQuantity || 0}
         />
      </>
   )
}

export default BaseInputs
