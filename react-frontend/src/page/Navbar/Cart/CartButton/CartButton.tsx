import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarCartButtonStyle, ItemsInCartStyle } from './CartButtonStyle'
import { useAppSelector } from '../../../../app/hooks'
import { CSSTransition } from 'react-transition-group'
import styles from './Qty.module.css'

const CartButton: React.FC<Props> = ({ onClickEvent }) => {
   const { totalQuantity, cartItems } = useAppSelector((state) => state.cart)
   const [showQty, setShowQty] = useState<boolean>(false)
   const qtyRef = useRef(null)

   useEffect(() => {
      setShowQty(cartItems.length > 0)
   }, [cartItems.length])

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
               exitActive: styles.QtyExitActive
            }}>
            <ItemsInCartStyle ref={qtyRef}>{totalQuantity}</ItemsInCartStyle>
         </CSSTransition>
         <FontAwesomeIcon icon={['fas', 'cart-arrow-down']} size='3x' />
      </NavbarCartButtonStyle>
   )
}

type Props = {
   onClickEvent: () => void
}

export default CartButton
