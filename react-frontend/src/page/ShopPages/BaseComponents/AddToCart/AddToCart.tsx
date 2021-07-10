import React from 'react'
import { CartQuantityStyle, StyledCartSection } from './CartStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddToCart = () => {
   return (
      <StyledCartSection>
         <label htmlFor='cart'>Kosárba</label>
         <CartQuantityStyle name='cart' type='number' />
         <button>
            <FontAwesomeIcon icon={['fas', 'cart-plus']} size='2x' />
         </button>
      </StyledCartSection>
   )
}

export default AddToCart
