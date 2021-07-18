import React from 'react'
import styled from 'styled-components'
import styles from './CartSlide.module.css'
import { navbarHeight } from '../NavbarStyles'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from '../../../app/hooks'
import NumberFormat from 'react-number-format'

import CartItem from './CartItem/CartItem'

const CartSlide: React.FC<Props> = ({ isSlideOpen, reference }) => {
   const { totalPrice, cartItems } = useAppSelector((state) => state.cart)
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
            <CartTitle>Kosár</CartTitle>
            {cartItems.length > 0 ? (
               cartItems.map((item) => (
                  <CartItem
                     key={item.itemId}
                     id={item.itemId}
                     displayImage={item.displayImage}
                     price={item.price * item.quantity}
                     productName={item.productName}
                     quantity={item.quantity}
                  />
               ))
            ) : (
               <h4>Nincs termék a kosárban!</h4>
            )}
            <FinalPriceStyle>
               Összesen : <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            </FinalPriceStyle>
         </SlideStyle>
      </CSSTransition>
   )
}

type Props = {
   isSlideOpen: boolean
   reference: React.MutableRefObject<null>
}

const CartTitle = styled.h1`
   margin: 1rem 0;
   font-size: 2rem;
`

const FinalPriceStyle = styled.h1`
   width: 85%;
   text-align: left;
   font-size: 1.5rem;
`

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
