import React, { useContext } from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarContext } from '../../NavbarContext'

import { useAppDispatch } from '../../../../app/hooks'
import { setProducts, setIsFetching } from '../../../../app/slices/ProductsSlice'
import { setProductName } from '../../../../app/slices/Filter/BaseFilterDataSlice'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   const dispatch = useAppDispatch()
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { setIsShopDropOpen, setIsNavbarOpen } = useContext(NavbarContext)
   const clickEvent = (event: React.MouseEvent) => {
      event.stopPropagation()
      setIsShopDropOpen(false)
   }
   const closeNavbar = (event: React.MouseEvent) => {
      if (isMobileSize) {
         event.stopPropagation()
         setIsShopDropOpen(false)
         setIsNavbarOpen(false)
      }
      // A products oldal suspense miatt kell
      dispatch(setIsFetching('INIT'))
      dispatch(setProducts([]))
      dispatch(setProductName(''))
   }
   return (
      <DropStyle ref={reference}>
         {isMobileSize && (
            <CloseDropdownMenu onClick={clickEvent}>
               <FontAwesomeIcon icon={['fas', 'times']} size='2x' />
            </CloseDropdownMenu>
         )}
         <DropLinkItem to='/vga' onClick={closeNavbar}>
            Videókártya
         </DropLinkItem>
         <DropLinkItem to='/cpu' onClick={closeNavbar}>
            Processzor
         </DropLinkItem>
         <DropLinkItem to='/memory' onClick={closeNavbar}>
            Memória
         </DropLinkItem>
         <DropLinkItem to='/hdd' onClick={closeNavbar}>
            Merevlemez
         </DropLinkItem>
         <DropLinkItem to='/ssd' onClick={closeNavbar}>
            SSD
         </DropLinkItem>
      </DropStyle>
   )
}

export default DropMenu
