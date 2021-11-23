import React from 'react'
import { errorMsg, findOrFailErrorMsg } from '../../Helpers/SetErrorMsg'
import { BaseInputFieldProps } from '../AdminTypes'

import TextField from '@mui/material/TextField'

const BaseInputs: React.FC<BaseInputFieldProps> = ({ product, setProduct, validationErrors }) => {
   return (
      <>
         <TextField
            id='itemNumber'
            label='Termék szám'
            value={product.itemNumber || ''}
            onChange={(event) => setProduct({ ...product, itemNumber: event.target.value })}
            margin='normal'
            variant='filled'
         />
         <TextField
            id='typeName'
            label='Típus név'
            value={product.type || ''}
            onChange={(event) => setProduct({ ...product, type: event.target.value })}
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'type')}
            helperText={errorMsg(validationErrors, 'type')}
         />
         <TextField
            id='typeCode'
            label='Típus kód'
            value={product.typeCode || ''}
            onChange={(event) => setProduct({ ...product, typeCode: event.target.value })}
            margin='normal'
            variant='filled'
         />
         <TextField
            id='manufacturer'
            label='Termék gyártó'
            value={product.manufacturer || ''}
            onChange={(event) => setProduct({ ...product, manufacturer: event.target.value })}
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'manufacturer')}
            helperText={errorMsg(validationErrors, 'manufacturer')}
         />
         <TextField
            id='price'
            label='Ár'
            value={product.price || ''}
            onChange={(event) => setProduct({ ...product, price: parseInt(event.target.value) })}
            margin='normal'
            variant='filled'
            required
            error={findOrFailErrorMsg(validationErrors, 'price')}
            helperText={errorMsg(validationErrors, 'price')}
         />
         <TextField
            id='stockQty'
            label='Raktáron lévő mennyiség'
            value={product.inStockQuantity || ''}
            onChange={(event) => setProduct({ ...product, inStockQuantity: parseInt(event.target.value) })}
            margin='normal'
            variant='filled'
         />
      </>
   )
}

export default BaseInputs
