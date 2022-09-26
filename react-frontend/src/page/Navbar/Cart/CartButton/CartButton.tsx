import React, { useEffect, useRef, useState, useContext } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { NavbarContext } from '../../NavbarContext'
import { NavbarActionTypes } from '../../Reducer/NavbarReducer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Qty.module.css'
import { NavbarCartButtonStyle, ItemsInCartStyle } from './CartButtonStyle'
import { CSSTransition } from 'react-transition-group'

const CartButton: React.FC = () => {
   const { totalQuantity, cartItems } = useAppSelector(state => state.cart)
   const {
      dispatch,
      state: { isCartOpen },
   } = useContext(NavbarContext)
   const [showQty, setShowQty] = useState<boolean>(false)
   const qtyRef = useRef(null)

   useEffect(() => {
      setShowQty(cartItems.length > 0)
   }, [cartItems.length])

   const onClickEvent = () => {
      dispatch({ type: NavbarActionTypes.SET_IS_CART_OPEN, payload: !isCartOpen })
   }

   return (
      <NavbarCartButtonStyle onClick={onClickEvent}>
         <CSSTransition
            in={showQty}
            unmountOnExit
            mountOnEnter
            timeout={300}
            nodeRef={qtyRef}
            classNames={{
               enter: styles.QtyEnter,
               enterActive: styles.QtyEnterActive,
               exit: styles.QtyExit,
               exitActive: styles.QtyExitActive,
            }}
         >
            <ItemsInCartStyle ref={qtyRef}>{totalQuantity}</ItemsInCartStyle>
         </CSSTransition>
         <FontAwesomeIcon icon={['fas', 'cart-arrow-down']} size='3x' />
      </NavbarCartButtonStyle>
   )
}

export default CartButton
