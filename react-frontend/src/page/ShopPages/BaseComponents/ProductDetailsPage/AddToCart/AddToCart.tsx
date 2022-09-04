import React, { useContext, useState } from 'react'
import DetailsContext from '../../../Context/DetailsContext'
import { sendCartItemToSaveInDB } from '../../../../../app/slices/CartSlice'
import { useAppDispatch } from '../../../../../app/hooks'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton'

import { StyledCartSection, StyledNumberInput } from './CartStyle'

const AddToCart: React.FC = () => {
   const dispatch = useAppDispatch()
   const { productId, manufacturer, pictureUrls, price, productType, type, typeCode } =
      useContext(DetailsContext)
   const [quantity, setQuantity] = useState<string>('1')
   const [isValidError, setIsValidError] = useState<boolean>(false)

   const handleQuantityOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsValidError(false)
      const finalValue = event.target.value.replace(/\D/g, '')
      finalValue === '' && setIsValidError(true)
      event.target.value === '0' ? setQuantity('1') : setQuantity(finalValue)
   }

   const addItemToCart = () => {
      if (quantity !== '') {
         dispatch(
            sendCartItemToSaveInDB({
               _id: productId,
               productType,
               displayName: `${manufacturer} ${type} ${typeCode}`,
               displayImage: pictureUrls[0],
               price,
               itemQuantity: Number(quantity),
            })
         )
      }
      setQuantity('1')
      setIsValidError(false)
   }

   return (
      <StyledCartSection>
         <StyledNumberInput
            fullWidth
            error={isValidError}
            type='text'
            id='qty'
            variant='filled'
            label='Darab'
            value={quantity}
            onChange={handleQuantityOnchange}
         />
         <IconButton size='large' onClick={addItemToCart} color='primary' aria-label='add to shopping cart'>
            <AddShoppingCartIcon fontSize='large' />
         </IconButton>
      </StyledCartSection>
   )
}

export default AddToCart
