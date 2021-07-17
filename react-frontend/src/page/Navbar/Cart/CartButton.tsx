import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarCartButtonStyle, ItemsInCartStyle } from './CartButtonStyle'
import { useAppSelector } from '../../../app/hooks'

const CartButton: React.FC<Props> = ({ onClickEvent }) => {
   const { totalQuantity, cartItems } = useAppSelector((state) => state.cart)

   return (
      <NavbarCartButtonStyle onClick={onClickEvent}>
         {cartItems.length > 0 && <ItemsInCartStyle>{totalQuantity}</ItemsInCartStyle>}
         <FontAwesomeIcon icon={['fas', 'cart-arrow-down']} size='3x' />
      </NavbarCartButtonStyle>
   )
}

type Props = {
   onClickEvent: () => void
}

export default CartButton
