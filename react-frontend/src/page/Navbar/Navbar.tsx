import React, { useRef, useState, useContext } from 'react'
import useWindowSize from '../../Hooks/useWindowSize'

import styles from './navbar.module.css'
import { useAppSelector } from '../../app/hooks'
import { NavbarContext } from './NavbarContext'
import { CSSTransition } from 'react-transition-group'

import BaseDropBackground from './DropMenu/BaseDrop/BaseDropBackground'
import ListItem from './ListItem/ListItem'
import CartButton from './Cart/CartButton/CartButton'
import CartSlide from './Cart/CartSlide'
import OpenButton from './OpenButton/OpenButton'

import { NavStyle, BrandStyle, DropdownBackground } from './NavbarStyles'
import { NavbarActionTypes } from './Reducer/NavbarReducer'

const Navbar = () => {
   const {
      dispatch,
      state: { isNavbarOpen },
   } = useContext(NavbarContext)
   useWindowSize(dispatch)
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)

   const navbarRef = useRef(null)
   const CartRef = useRef(null)

   const closeDrops = () => {
      dispatch({ type: NavbarActionTypes.SET_IS_SHOP_DROP_OPEN, payload: false })
      dispatch({ type: NavbarActionTypes.SET_IS_USER_DROP_OPEN, payload: false })
   }
   const closeNavbarOnMobile = () => {
      if (isMobileSize) dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
   }

   return (
      <>
         <OpenButton />
         <CSSTransition
            appear
            in={isNavbarOpen}
            unmountOnExit
            mountOnEnter
            timeout={350}
            nodeRef={navbarRef}
            classNames={{
               enter: styles.NavEnter,
               enterActive: styles.NavEnterActive,
               exit: styles.NavExit,
               exitActive: styles.NavExitActive,
            }}
         >
            <NavStyle mobileSize={isMobileSize} ref={navbarRef} onMouseLeave={closeDrops}>
               <BrandStyle onClick={closeNavbarOnMobile} to='/'>
                  ComputerStore
               </BrandStyle>
               <ListItem />
               <CartButton />
               <CartSlide reference={CartRef} />
            </NavStyle>
         </CSSTransition>
         {!isMobileSize && (
            <BaseDropBackground>
               <DropdownBackground
                  onClick={() => dispatch({ type: NavbarActionTypes.SET_IS_CART_OPEN, payload: false })}
               />
            </BaseDropBackground>
         )}
      </>
   )
}

export default Navbar
