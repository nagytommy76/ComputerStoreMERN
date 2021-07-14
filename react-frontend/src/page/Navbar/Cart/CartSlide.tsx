import React from 'react'
import styled from 'styled-components'
import styles from './CartSlide.module.css'
import { navbarHeight } from '../NavbarStyles'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from '../../../app/hooks'

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
            {cartItems.length > 0 ? <h1>{cartItems[0].productName}</h1> : <h4>Nincs termék a kosárban! :(</h4>}
         </SlideStyle>
      </CSSTransition>
   )
}

type Props = {
   isSlideOpen: boolean
   reference: React.MutableRefObject<null>
}

const SlideStyle = styled.section`
   width: 360px;
   height: calc(100% - ${navbarHeight});
   color: black;
   background-color: white;
   position: fixed;
   right: 0;
   bottom: 0;
`

export default CartSlide
