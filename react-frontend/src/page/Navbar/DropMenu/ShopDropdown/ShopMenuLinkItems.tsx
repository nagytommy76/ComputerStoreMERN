import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { NavbarContext } from '../../NavbarContext'

import { NavbarActionTypes } from '../../Reducer/NavbarReducer'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setProducts, setIsFetching } from '../../../../app/slices/ProductsSlice'
import { setProductName } from '../../../../app/slices/Filter/BaseFilterDataSlice'

import { DropLinkItem, StyledMenuItem } from '../DropMenuStyle'

const ShopMenuLinkItems = () => {
   const location = useLocation()
   const ReduxDispatch = useAppDispatch()
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { dispatch } = useContext(NavbarContext)
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
   const closeNavbar = (event: React.MouseEvent<HTMLAnchorElement>, linkTo: string) => {
      if (isMobileSize) {
         event.stopPropagation()
         dispatch({ type: NavbarActionTypes.SET_IS_SHOP_DROP_OPEN, payload: false })
         dispatch({ type: NavbarActionTypes.SET_IS_NAVBAR_OPEN, payload: false })
      }
      // A products oldal suspense miatt kell
      if (locationPathArray.includes(location.pathname) && location.pathname !== linkTo) {
         ReduxDispatch(setIsFetching('INIT'))
         ReduxDispatch(setProducts([]))
         ReduxDispatch(setProductName(''))
      }
      dispatch({ type: NavbarActionTypes.SET_SHOP_ANCHOR_EL, payload: null })
   }

   return (
      <>
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
      </>
   )
}

export default ShopMenuLinkItems
