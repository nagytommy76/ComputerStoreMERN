import React, { useContext } from 'react'
import LinkItem from '../LinkItems/LinkItem'
import ShopDropMenu from '../DropMenu/ShopDropdown/DropMenu'
import UserDrop from '../DropMenu/UserDropdown/UserDrop'
import Toggler from '../ThemeToggler/Toggle'
import { NavbarContext } from '../NavbarContext'
import { NavbarActionTypes } from '../Reducer/NavbarReducer'

import { TogglerCartListItems, StyledListItems } from '../LinkItems/LinkItemStyles'
import { StyledUnorderedList } from '../NavbarStyles'
import { useAppSelector } from '../../../app/hooks'

const ListItem: React.FC = () => {
   const userLoggedIn = useAppSelector(state => state.auth.userLoggedIn)
   const userName = useAppSelector(state => state.auth.userName)
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { dispatch } = useContext(NavbarContext)

   const openUserDrop = (event: React.MouseEvent<HTMLElement>) => {
      dispatch({ type: NavbarActionTypes.SET_IS_USER_DROP_OPEN, payload: true })
      dispatch({ type: NavbarActionTypes.SET_USER_ANCHOR_EL, payload: event.currentTarget })
   }

   const openShopDrop = (event: React.MouseEvent<HTMLElement>) => {
      dispatch({ type: NavbarActionTypes.SET_IS_SHOP_DROP_OPEN, payload: true })
      dispatch({ type: NavbarActionTypes.SET_SHOP_ANCHOR_EL, payload: event.currentTarget })
   }

   return (
      <StyledUnorderedList>
         {!userLoggedIn && (
            <LinkItem
               to='/login'
               linkText='Belépés'
               ClickEvent={() =>
                  isMobileSize && dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
               }
            />
         )}
         {!userLoggedIn && (
            <LinkItem
               to='/register'
               linkText='Regisztráció'
               ClickEvent={() =>
                  isMobileSize && dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
               }
            />
         )}
         {userLoggedIn && (
            <StyledListItems onMouseEnter={openUserDrop} onClick={openUserDrop}>
               {userName}
               <UserDrop />
            </StyledListItems>
         )}
         <StyledListItems onMouseEnter={openShopDrop} onClick={openShopDrop}>
            Shop Menü
            <ShopDropMenu />
         </StyledListItems>
         <TogglerCartListItems>
            <Toggler />
         </TogglerCartListItems>
      </StyledUnorderedList>
   )
}

export default ListItem
