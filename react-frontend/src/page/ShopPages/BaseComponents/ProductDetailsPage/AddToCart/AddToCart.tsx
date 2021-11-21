import React, { useState } from 'react'
import { CartQuantityStyle, StyledCartSection, AddToCartButton, InputAndLabelContainer, StyledLabel } from './CartStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sendCartItemToSaveInDB } from '../../../../../app/slices/CartSlice'
import { useAppDispatch } from '../../../../../app/hooks'
import { useLocation } from 'react-router-dom'
import { LocationType } from '../../../BaseTypes'

const AddToCart = () => {
   const dispatch = useAppDispatch()
   const [quantity, setQuantity] = useState<string>('1')
   let location = useLocation()
   const state = location.state as LocationType
   const { _id, manufacturer, type, typeCode, price, pictureUrls } = state
   const addItemToCart = () => {
      dispatch(
         sendCartItemToSaveInDB(
            {
               _id,
               displayName: `${manufacturer} ${type} ${typeCode}`,
               price,
               itemQuantity: parseInt(quantity),
               displayImage: pictureUrls[0]
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
