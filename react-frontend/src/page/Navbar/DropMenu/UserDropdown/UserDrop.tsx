import React, { useContext } from 'react'
import useLogout from '../../../../Hooks/useLogout'
import { DropLinkItem } from '../DropMenuStyle'
import { NavbarContext } from '../../NavbarContext'
import { NavbarActionTypes } from '../../Reducer/NavbarReducer'

import { useAppSelector } from '../../../../app/hooks'
import { StyledMenuItem } from '../DropMenuStyle'
import Menu from '@mui/material/Menu'

const DropMenu: React.FC = () => {
   const logout = useLogout()
   const isAdmin = useAppSelector(state => state.auth.isAdmin)
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const {
      state: { userAnchorEl },
      dispatch,
   } = useContext(NavbarContext)
   const open = Boolean(userAnchorEl)

   const clickEvent = (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch({ type: NavbarActionTypes.SET_IS_USER_DROP_OPEN, payload: false })
      dispatch({ type: NavbarActionTypes.SET_USER_ANCHOR_EL, payload: null })
      isMobileSize && dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
   }

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch({ type: NavbarActionTypes.SET_IS_USER_DROP_OPEN, payload: false })
      dispatch({ type: NavbarActionTypes.SET_USER_ANCHOR_EL, payload: null })
   }

   const logoutHandler = () => logout()

   return (
      <Menu
         anchorEl={userAnchorEl}
         id='shop-menu'
         open={open}
         onClose={closeDropMenu}
         onClick={closeDropMenu}
         MenuListProps={{ onMouseLeave: closeDropMenu }}
         PaperProps={{
            elevation: 0,
            sx: {
               overflow: 'visible',
               filter: 'drop-shadow(0px 2px 8px #27272751)',
               mt: 1.5,
            },
         }}
         transformOrigin={{ horizontal: 'center', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem to='/orders' onClick={clickEvent}>
               Korábbi rendelések
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem to='#' onClick={logoutHandler}>
               Kijelentkezés
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            {isAdmin && (
               <DropLinkItem onClick={clickEvent} to={`/${process.env.REACT_APP_PROTECTED_ADMIN_ROUTE}`}>
                  Admin Felület
               </DropLinkItem>
            )}
         </StyledMenuItem>
      </Menu>
   )
}

export default DropMenu
