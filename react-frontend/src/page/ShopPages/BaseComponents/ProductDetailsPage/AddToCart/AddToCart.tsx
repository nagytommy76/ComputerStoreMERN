import React, { useState } from 'react'
import { CartQuantityStyle, StyledCartSection, AddToCartButton, InputAndLabelContainer, StyledLabel } from './CartStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sendCartItemsToSaveInDB } from '../../../../../app/slices/CartSlice'

const AddToCart = () => {
   const [quantity, setQuantity] = useState<number>(1)
   return (
      <StyledCartSection>
         <InputAndLabelContainer>
            <CartQuantityStyle
               id='cart'
               type='number'
               max='30'
               min='1'
               value={quantity}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(event.target.value))}
            />
            <StyledLabel htmlFor='cart'>Darab</StyledLabel>
         </InputAndLabelContainer>
         <AddToCartButton>
            <FontAwesomeIcon icon={['fas', 'cart-plus']} size='3x' />
         </AddToCartButton>
      </StyledCartSection>
   )
}

export default AddToCart
