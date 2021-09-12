import React from 'react'
import TextOrNumberInput from './InputFields/TextOrNumberInput'
import { errorMsg } from '../../Helpers/SetErrorMsg'
import { ValidationError } from '../AdminTypes'

const BaseInputs: React.FC<Props> = ({ product, setProduct, validationErrors }) => {
   return (
      <>
         <TextOrNumberInput
            labelText='Termék szám'
            onChangeEvent={(event) => setProduct({ ...product, itemNumber: event.target.value })}
            value={product.itemNumber}
            errorMsg={errorMsg(validationErrors, 'itemNumber')}
         />
         <TextOrNumberInput
            labelText='Típus név'
            onChangeEvent={(event) => setProduct({ ...product, type: event.target.value })}
            value={product.type}
            errorMsg={errorMsg(validationErrors, 'type')}
         />
         <TextOrNumberInput
            labelText='Típus kód'
            onChangeEvent={(event) => setProduct({ ...product, typeCode: event.target.value })}
            value={product.typeCode}
         />
         <TextOrNumberInput
            labelText='Termék gyártó'
            onChangeEvent={(event) => setProduct({ ...product, manufacturer: event.target.value })}
            value={product.manufacturer}
            errorMsg={errorMsg(validationErrors, 'manufacturer')}
         />
         <TextOrNumberInput
            inputType='number'
            labelText='Ár'
            onChangeEvent={(event) => setProduct({ ...product, price: parseInt(event.target.value) })}
            value={product.price}
            errorMsg={errorMsg(validationErrors, 'price')}
         />
      </>
   )
}

type Props = {
   product: any
   setProduct: React.Dispatch<React.SetStateAction<any>>
   validationErrors: ValidationError[]
}

export default BaseInputs
