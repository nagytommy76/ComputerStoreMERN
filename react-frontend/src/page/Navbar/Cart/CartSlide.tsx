import React, { useContext } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { NavbarContext } from '../NavbarContext'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import { NavbarActionTypes } from '../Reducer/NavbarReducer'

import { CSSTransition } from 'react-transition-group'
import { SlideStyle, CartTitle, FinalPriceStyle, FooterStyle, FooterButtonsStyle } from './CartSlideStyle'
import styles from './CartSlide.module.css'
import CartItem from './CartItem/CartItem'

const CartSlide: React.FC<Props> = ({ reference }) => {
   const mobileView = useAppSelector(state => state.mobile.isMobile)
   const { totalPrice, cartItems } = useAppSelector(state => state.cart)
   const { userLoggedIn } = useAppSelector(state => state.auth)
   const {
      dispatch,
      state: { isCartOpen },
   } = useContext(NavbarContext)

   const OnClickCloseEvent = () => {
      dispatch({ type: NavbarActionTypes.SET_IS_CART_OPEN, payload: false })
   }

   const OnClickCloseNavbarAndCartEvent = () => {
      dispatch({ type: NavbarActionTypes.SET_IS_CART_OPEN, payload: false })
      if (mobileView) {
         setTimeout(() => {
            dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
         }, 300)
      }
   }

   return (
      <CSSTransition
         in={isCartOpen}
         unmountOnExit
         mountOnEnter
         timeout={300}
         nodeRef={reference}
         classNames={{
            enter: styles.SlideEnter,
            enterActive: styles.SlideEnterActive,
            exitActive: styles.SlideExitActive,
         }}
      >
         <SlideStyle ref={reference}>
            <CartTitle>Kosár</CartTitle>
            {cartItems.length > 0 ? (
               cartItems.map(item => (
                  <CartItem
                     key={item.itemId}
                     id={item.itemId}
                     displayImage={item.displayImage}
                     price={item.price * item.quantity}
                     productName={item.displayName}
                     quantity={item.quantity}
                  />
               ))
            ) : (
               <h4>Nincs termék a kosárban!</h4>
            )}
            <FinalPriceStyle>
               Összesen :{' '}
               <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            </FinalPriceStyle>
            {cartItems.length > 0 && (
               <FooterStyle>
                  {userLoggedIn ? (
                     <Link to='checkout' onClick={OnClickCloseEvent}>
                        <FooterButtonsStyle
                           onClick={OnClickCloseNavbarAndCartEvent}
                           isDisabled={!userLoggedIn}
                           disabled={!userLoggedIn}
                        >
                           Tovább a rendeléshez
                        </FooterButtonsStyle>
                     </Link>
                  ) : (
                     <FooterButtonsStyle
                        isDisabled={!userLoggedIn}
                        disabled={!userLoggedIn}
                        onClick={OnClickCloseNavbarAndCartEvent}
                     >
                        Tovább a rendeléshez
                     </FooterButtonsStyle>
                  )}
                  {!userLoggedIn && (
                     <Link to='login'>
                        <FooterButtonsStyle onClick={OnClickCloseEvent}>Belépés</FooterButtonsStyle>
                     </Link>
                  )}
                  {!userLoggedIn && (
                     <Link to='register'>
                        <FooterButtonsStyle onClick={OnClickCloseEvent}>Regisztráció</FooterButtonsStyle>
                     </Link>
                  )}
               </FooterStyle>
            )}
         </SlideStyle>
      </CSSTransition>
   )
}

type Props = {
   reference: React.MutableRefObject<null>
}

export default CartSlide
