import React, { useRef, useState } from 'react'
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

const Navbar = () => {
   const [isNavbarOpen, setIsNavbarOpen] = useState(false)
   useWindowSize(setIsNavbarOpen)
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const [isShopDropOpen, setIsShopDropOpen] = useState(false)
   const [isUserDropOpen, setIsUserDropOpen] = useState(false)
   const [isCartOpen, setIsCartOpen] = useState(false)

   const navbarRef = useRef(null)
   const BackgroundRef = useRef(null)
   const CartRef = useRef(null)

   const closeDrops = () => {
      setIsShopDropOpen(false)
      setIsUserDropOpen(false)
   }
   const closeNavbarOnMobile = () => {
      if (isMobileSize) setIsNavbarOpen(false)
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
            isCartOpen,
            setIsCartOpen,
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
