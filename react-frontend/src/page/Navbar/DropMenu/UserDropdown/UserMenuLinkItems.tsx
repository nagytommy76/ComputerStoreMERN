import React, { useContext } from 'react'
import { NavbarActionTypes } from '../../Reducer/NavbarReducer'
import { NavbarContext } from '../../NavbarContext'
import { useAppSelector } from '../../../../app/hooks'
import useLogout from '../../../../Hooks/useLogout'

import { DropLinkItem } from '../DropMenuStyle'
import { StyledMenuItem } from '../DropMenuStyle'
import LogoutIcon from '@mui/icons-material/Logout'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import Divider from '@mui/material/Divider/Divider'

const UserMenuLinkItems = () => {
   const logout = useLogout()
   const { dispatch } = useContext(NavbarContext)

   const logoutHandler = () => logout()

   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const isAdmin = useAppSelector(state => state.auth.isAdmin)
   const clickEvent = (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch({ type: NavbarActionTypes.SET_IS_USER_DROP_OPEN, payload: false })
      dispatch({ type: NavbarActionTypes.SET_USER_ANCHOR_EL, payload: null })
      isMobileSize && dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
   }

   return (
      <>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem to='/orders' onClick={clickEvent}>
               <ProductionQuantityLimitsIcon sx={{ marginRight: 1 }} fontSize='small' />
               Korábbi rendelések
            </DropLinkItem>
         </StyledMenuItem>
         <Divider />
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem to='#' onClick={logoutHandler}>
               <LogoutIcon fontSize='small' sx={{ marginRight: 1 }} />
               Kijelentkezés
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            {isAdmin && (
               <DropLinkItem onClick={clickEvent} to={`/${process.env.REACT_APP_PROTECTED_ADMIN_ROUTE}`}>
                  <AdminPanelSettingsIcon fontSize='small' sx={{ marginRight: 1 }} />
                  Admin Felület
               </DropLinkItem>
            )}
         </StyledMenuItem>
      </>
   )
}

export default UserMenuLinkItems
