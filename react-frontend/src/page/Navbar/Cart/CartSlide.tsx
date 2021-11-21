import React from 'react'
import styles from './CartSlide.module.css'
import { SlideStyle, CartTitle, FinalPriceStyle, FooterStyle, FooterButtonsStyle } from './CartSlideStyle'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from '../../../app/hooks'
import NumberFormat from 'react-number-format'

import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'

const CartSlide: React.FC<Props> = ({ isSlideOpen, reference, setIsSlideOpen }) => {
   const { totalPrice, cartItems } = useAppSelector((state) => state.cart)
   const { userLoggedIn } = useAppSelector((state) => state.auth)

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
                     productName={item.displayName}
                     quantity={item.quantity}
                  />
               ))
            ) : (
               <h4>Nincs termék a kosárban!</h4>
            )}
            <FinalPriceStyle>
               Összesen : <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            </FinalPriceStyle>
            {cartItems.length > 0 && (
               <FooterStyle>
                  {userLoggedIn ? (
                     <Link to='checkout' onClick={() => setIsSlideOpen(false)}>
                        <FooterButtonsStyle
                           onClick={() => setIsSlideOpen(false)}
                           isDisabled={!userLoggedIn}
                           disabled={!userLoggedIn}>
                           Tovább a rendeléshez
                        </FooterButtonsStyle>
                     </Link>
                  ) : (
                     <FooterButtonsStyle
                        isDisabled={!userLoggedIn}
                        disabled={!userLoggedIn}
                        onClick={() => setIsSlideOpen(false)}>
                        Tovább a rendeléshez
                     </FooterButtonsStyle>
                  )}
                  {!userLoggedIn && (
                     <Link to='login'>
                        <FooterButtonsStyle onClick={() => setIsSlideOpen(false)}>Belépés</FooterButtonsStyle>
                     </Link>
                  )}
                  {!userLoggedIn && (
                     <Link to='register'>
                        <FooterButtonsStyle onClick={() => setIsSlideOpen(false)}>Regisztráció</FooterButtonsStyle>
                     </Link>
                  )}
               </FooterStyle>
            )}
         </SlideStyle>
      </CSSTransition>
   )
}

type Props = {
   isSlideOpen: boolean
   reference: React.MutableRefObject<null>
   setIsSlideOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default CartSlide
