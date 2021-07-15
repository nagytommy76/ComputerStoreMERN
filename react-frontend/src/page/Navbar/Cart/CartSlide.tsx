import React from 'react'
import styled from 'styled-components'
import styles from './CartSlide.module.css'
import { navbarHeight } from '../NavbarStyles'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from '../../../app/hooks'

import CartItem from './CartItem/CartItem'

const CartSlide: React.FC<Props> = ({ isSlideOpen, reference }) => {
   const cartItems = useAppSelector((state) => state.cart.cartItems)
   return (
      <CSSTransition
         in={isSlideOpen}
         unmountOnExit
         mountOnEnter
         timeout={300}
         nodeRef={reference}
         classNames={{
            enter: styles.SlideEnter,
            enterActive: styles.SlideEnterActive,
            exitActive: styles.SlideExitActive
         }}>
         <SlideStyle ref={reference}>
            {cartItems.length > 0 ? (
               cartItems.map((item) => (
                  <CartItem
                     key={item._id}
                     displayImage={item.displayImage}
                     price={item.price}
                     productName={item.productName}
                     quantity={item.quantity}
                  />
               ))
            ) : (
               <h4>Nincs termék a kosárban!</h4>
            )}
         </SlideStyle>
      </CSSTransition>
   )
}

type Props = {
   isSlideOpen: boolean
   reference: React.MutableRefObject<null>
}

const SlideStyle = styled.section`
   width: 400px;
   height: calc(100% - ${navbarHeight});
   color: black;
   background-color: #eee;
   position: fixed;
   right: 0;
   bottom: 0;

   display: flex;
   flex-direction: column;
   align-items: center;
`

export default CartSlide
