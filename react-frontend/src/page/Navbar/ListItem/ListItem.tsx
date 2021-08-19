import React, { useContext, useRef } from 'react'
import LinkItem from '../LinkItems/LinkItem'
import BaseDrop from '../DropMenu/BaseDrop/BaseDrop'
import ShopDropMenu from '../DropMenu/ShopDropdown/DropMenu'
import UserDrop from '../DropMenu/UserDropdown/UserDrop'
import Toggler from '../ThemeToggler/Toggle'
import { NavbarContext } from '../NavbarContext'

import { TogglerCartListItems } from '../LinkItems/LinkItemStyles'
import { StyledUnorderedList } from '../NavbarStyles'
import { useAppSelector } from '../../../app/hooks'

const ListItem: React.FC = () => {
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)
   const userDropRef = useRef(null)
   const shopDropRef = useRef(null)
   const { isShopDropOpen, isUserDropOpen, setIsNavbarOpen, setIsShopDropOpen, setIsUserDropOpen } = useContext(NavbarContext)

   return (
      <StyledUnorderedList>
         {!userLoggedIn && <LinkItem to='/login' linkText='Belépés' ClickEvent={() => isMobileSize && setIsNavbarOpen(false)} />}
         {!userLoggedIn && (
            <LinkItem to='/register' linkText='Regisztráció' ClickEvent={() => isMobileSize && setIsNavbarOpen(false)} />
         )}
         {userLoggedIn && (
            <BaseDrop text={userName} dropRef={userDropRef} isDropOpen={isUserDropOpen} setIsDropOpen={setIsUserDropOpen}>
               <UserDrop reference={userDropRef} />
            </BaseDrop>
         )}
         <BaseDrop text='Shop Menü' dropRef={shopDropRef} isDropOpen={isShopDropOpen} setIsDropOpen={setIsShopDropOpen}>
            <ShopDropMenu reference={shopDropRef} />
         </BaseDrop>
         <TogglerCartListItems>
            <Toggler />
         </TogglerCartListItems>
      </StyledUnorderedList>
   )
}

export default ListItem
