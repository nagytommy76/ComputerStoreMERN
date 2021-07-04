import React, { useRef, useState } from 'react'
import { NavStyle, BrandStyle, StyledUnorderedList, DropdownBackground } from './NavbarStyles'
import { StyledListItems } from './LinkItems/LinkItemStyles'
import { useAppSelector } from '../../app/hooks'
import BaseDrop from './DropMenu/BaseDrop/BaseDrop'
import BaseDropBackground from './DropMenu/BaseDrop/BaseDropBackground'

import DropMenu from './DropMenu/ShopDropdown/DropMenu'
import UserDrop from './DropMenu/UserDropdown/UserDrop'
import Toggler from './ThemeToggler/Toggle'
const LinkItem = React.lazy(() => import('./LinkItems/LinkItem'))

const Navbar = () => {
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)
   const [isShopDropOpen, setIsShopDropOpen] = useState(false)
   const [isUserDropOpen, setIsUserDropOpen] = useState(false)
   const userDropRef = useRef(null)
   const shopDropRef = useRef(null)
   const BackgroundRef = useRef(null)

   const closeDrops = () => {
      setIsShopDropOpen(false)
      setIsUserDropOpen(false)
   }
   return (
      <>
         <NavStyle onMouseLeave={() => closeDrops()}>
            <BrandStyle to='/'>ComputerStore</BrandStyle>
            <StyledUnorderedList>
               {!userLoggedIn && <LinkItem to='/login' linkText='Belépés' />}
               {!userLoggedIn && <LinkItem to='/register' linkText='Regisztráció' />}
               {userLoggedIn && (
                  <BaseDrop text={userName} dropRef={userDropRef} isDropOpen={isUserDropOpen} setIsDropOpen={setIsUserDropOpen}>
                     <UserDrop reference={userDropRef} />
                  </BaseDrop>
               )}
               <BaseDrop text='Shop Menü' dropRef={shopDropRef} isDropOpen={isShopDropOpen} setIsDropOpen={setIsShopDropOpen}>
                  <DropMenu reference={shopDropRef} />
               </BaseDrop>
               <StyledListItems>
                  <Toggler />
               </StyledListItems>
            </StyledUnorderedList>
         </NavStyle>
         <BaseDropBackground isDropOpen={isShopDropOpen || isUserDropOpen} nodeRef={BackgroundRef}>
            <DropdownBackground ref={BackgroundRef} />
         </BaseDropBackground>
      </>
   )
}

export default Navbar
