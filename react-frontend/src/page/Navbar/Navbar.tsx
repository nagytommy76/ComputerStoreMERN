import React, { useRef, useState, useEffect, useCallback } from 'react'
import { NavStyle, BrandStyle, DropdownBackground } from './NavbarStyles'
import styles from './navbar.module.css'
import OpenButton from './OpenButton/OpenButton'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import BaseDropBackground from './DropMenu/BaseDrop/BaseDropBackground'
import { NavbarContext } from './NavbarContext'

import ListItem from './ListItem/ListItem'
import CartButton from './Cart/CartButton/CartButton'
import CartSlide from './Cart/CartSlide'
import { setIsMobileSize } from '../../app/slices/MobileSlice'
import { CSSTransition } from 'react-transition-group'

const Navbar = () => {
   const dispatch = useAppDispatch()
   const handleWindowSizeChange = useCallback(() => {
      if (window.innerWidth <= 950) {
         dispatch(setIsMobileSize(true))
      } else {
         setIsNavbarOpen(true)
         dispatch(setIsMobileSize(false))
      }
   }, [dispatch])
   useEffect(() => {
      window.addEventListener('load', handleWindowSizeChange)
      return () => window.removeEventListener('load', handleWindowSizeChange)
   }, [handleWindowSizeChange])

   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const [isShopDropOpen, setIsShopDropOpen] = useState(false)
   const [isUserDropOpen, setIsUserDropOpen] = useState(false)
   const [isNavbarOpen, setIsNavbarOpen] = useState(false)
   const [isCartOpen, setIsCartOpen] = useState(false)

   const navbarRef = useRef(null)
   const BackgroundRef = useRef(null)
   const CartRef = useRef(null)

   const closeDrops = () => {
      setIsShopDropOpen(false)
      setIsUserDropOpen(false)
   }
   return (
      <NavbarContext.Provider
         value={{
            isNavbarOpen,
            isShopDropOpen,
            isUserDropOpen,
            setIsNavbarOpen,
            setIsShopDropOpen,
            setIsUserDropOpen,
         }}
      >
         <OpenButton />
         <CSSTransition
            appear
            in={isNavbarOpen}
            unmountOnExit
            mountOnEnter
            timeout={500}
            nodeRef={navbarRef}
            classNames={{
               enter: styles.NavEnter,
               enterActive: styles.NavEnterActive,
               exit: styles.NavExit,
               exitActive: styles.NavExitActive,
            }}
         >
            <NavStyle mobileSize={isMobileSize} ref={navbarRef} onMouseLeave={() => closeDrops()}>
               <BrandStyle onClick={() => setIsNavbarOpen(false)} to='/'>
                  ComputerStore
               </BrandStyle>
               <ListItem />
               <CartButton onClickEvent={() => setIsCartOpen(!isCartOpen)} />
               <CartSlide isSlideOpen={isCartOpen} setIsSlideOpen={setIsCartOpen} reference={CartRef} />
            </NavStyle>
         </CSSTransition>
         {!isMobileSize && (
            <BaseDropBackground
               isDropOpen={isShopDropOpen || isUserDropOpen || isCartOpen}
               nodeRef={BackgroundRef}
            >
               <DropdownBackground onClick={() => setIsCartOpen(false)} ref={BackgroundRef} />
            </BaseDropBackground>
         )}
      </NavbarContext.Provider>
   )
}

export default Navbar
