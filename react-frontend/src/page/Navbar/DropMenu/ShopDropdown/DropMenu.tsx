import React, { useContext } from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarContext } from '../../NavbarContext'
import { useLocation } from 'react-router-dom'

import { useAppDispatch } from '../../../../app/hooks'
import { setProducts, setIsFetching } from '../../../../app/slices/ProductsSlice'
import { setProductName } from '../../../../app/slices/Filter/BaseFilterDataSlice'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   const location = useLocation()
   const dispatch = useAppDispatch()
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { setIsShopDropOpen, setIsNavbarOpen } = useContext(NavbarContext)
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
      setIsShopDropOpen(false)
   }

   const closeNavbar = (event: React.MouseEvent<HTMLAnchorElement>, linkTo: string) => {
      if (isMobileSize) {
         event.stopPropagation()
         setIsShopDropOpen(false)
         setIsNavbarOpen(false)
      }
      // A products oldal suspense miatt kell
      if (locationPathArray.includes(location.pathname) && location.pathname !== linkTo) {
         dispatch(setIsFetching('INIT'))
         dispatch(setProducts([]))
         dispatch(setProductName(''))
      }
   }
   return (
      <DropStyle ref={reference}>
         {isMobileSize && (
            <CloseDropdownMenu onClick={closeDropMenu}>
               <FontAwesomeIcon icon={['fas', 'times']} size='2x' />
            </CloseDropdownMenu>
         )}
         <DropLinkItem to='/vga' onClick={e => closeNavbar(e, '/vga')}>
            Videókártya
         </DropLinkItem>
         <DropLinkItem to='/cpu' onClick={e => closeNavbar(e, '/cpu')}>
            Processzor
         </DropLinkItem>
         <DropLinkItem to='/memory' onClick={e => closeNavbar(e, '/memory')}>
            Memória
         </DropLinkItem>
         <DropLinkItem to='/hdd' onClick={e => closeNavbar(e, '/hdd')}>
            Merevlemez
         </DropLinkItem>
         <DropLinkItem to='/ssd' onClick={e => closeNavbar(e, '/ssd')}>
            SSD
         </DropLinkItem>
      </DropStyle>
   )
}

export default DropMenu
