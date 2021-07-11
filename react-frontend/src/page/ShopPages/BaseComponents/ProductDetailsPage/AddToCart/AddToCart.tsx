import React from 'react'
import { CartQuantityStyle, StyledCartSection, AddToCartButton, InputAndLabelContainer, StyledLabel } from './CartStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddToCart = () => {
   return (
      <StyledCartSection>
         <InputAndLabelContainer>
            <CartQuantityStyle id='cart' type='number' max='30' min='1' />
            <StyledLabel htmlFor='cart'>Darab</StyledLabel>
         </InputAndLabelContainer>
         <AddToCartButton>
            <FontAwesomeIcon icon={['fas', 'cart-plus']} size='3x' />
         </AddToCartButton>
      </StyledCartSection>
   )
}

export default AddToCart
