import React, { useContext } from 'react'
import { DropLinkItem } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { NavbarContext } from '../../NavbarContext'
import { useLocation } from 'react-router-dom'
import { NavbarActionTypes } from '../../Reducer/NavbarReducer'

import { useAppDispatch } from '../../../../app/hooks'
import { setProducts, setIsFetching } from '../../../../app/slices/ProductsSlice'
import { setProductName } from '../../../../app/slices/Filter/BaseFilterDataSlice'

import { StyledMenuItem } from '../DropMenuStyle'
import Menu from '@mui/material/Menu'

const DropMenu: React.FC = () => {
   const location = useLocation()
   const ReducDispatch = useAppDispatch()
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const {
      state: { shopAnchorEl },
      dispatch,
   } = useContext(NavbarContext)
   const open = Boolean(shopAnchorEl)
   const locationPathArray = [
      '/vga',
      '/cpu',
      '/memory',
      '/hdd',
      '/ssd',
      '/',
      '/orders',
      '/login',
      '/register',
   ]

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch({ type: NavbarActionTypes.SET_IS_SHOP_DROP_OPEN, payload: false })
      dispatch({ type: NavbarActionTypes.SET_SHOP_ANCHOR_EL, payload: null })
   }

   const closeNavbar = (event: React.MouseEvent<HTMLAnchorElement>, linkTo: string) => {
      if (isMobileSize) {
         event.stopPropagation()
         dispatch({ type: NavbarActionTypes.SET_IS_SHOP_DROP_OPEN, payload: false })
         dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
      }
      // A products oldal suspense miatt kell
      if (locationPathArray.includes(location.pathname) && location.pathname !== linkTo) {
         ReducDispatch(setIsFetching('INIT'))
         ReducDispatch(setProducts([]))
         ReducDispatch(setProductName(''))
      }
      dispatch({ type: NavbarActionTypes.SET_SHOP_ANCHOR_EL, payload: null })
   }
   return (
      <Menu
         anchorEl={shopAnchorEl}
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
            <DropLinkItem onClick={e => closeNavbar(e, '/vga')} to='/vga'>
               Videókártya
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/cpu')} to='/cpu'>
               Processzor
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/memory')} to='/memory'>
               Memória
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/hdd')} to='/hdd'>
               Merevlemez
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/ssd')} to='/ssd'>
               SSD
            </DropLinkItem>
         </StyledMenuItem>
      </Menu>
   )
}

export default DropMenu
