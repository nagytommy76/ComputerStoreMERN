import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { sendCartItemToSaveInDB } from '../../../../../app/slices/CartSlice'
import { useAppDispatch } from '../../../../../app/hooks'
import { LocationType } from '../../../BaseTypes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   CartQuantityStyle,
   StyledCartSection,
   AddToCartButton,
   InputAndLabelContainer,
   StyledLabel,
} from './CartStyle'

const AddToCart = () => {
   const dispatch = useAppDispatch()
   const [quantity, setQuantity] = useState<string>('1')
   let location = useLocation()
   const state = location.state as LocationType
   const { _id, manufacturer, type, typeCode, price, pictureUrls, productType } = state
   const addItemToCart = () => {
      dispatch(
         sendCartItemToSaveInDB(
            {
               _id,
               productType,
               displayName: `${manufacturer} ${type} ${typeCode}`,
               displayImage: pictureUrls[0],
               price,
               itemQuantity: parseInt(quantity),
            },
            'vgaproduct'
         )
      )
      setQuantity('1')
   }

   return (
      <StyledCartSection>
         <InputAndLabelContainer>
            <CartQuantityStyle
               id='cart'
               type='number'
               max='30'
               min='1'
               value={quantity}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuantity(event.target.value)}
            />
            <StyledLabel htmlFor='cart'>Darab</StyledLabel>
         </InputAndLabelContainer>
         <AddToCartButton onClick={addItemToCart}>
            <FontAwesomeIcon icon={['fas', 'cart-plus']} size='3x' />
         </AddToCartButton>
      </StyledCartSection>
   )
}

export default AddToCart
