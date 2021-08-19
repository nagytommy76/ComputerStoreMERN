import React, { useContext } from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarContext } from '../../NavbarContext'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)
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
   }
   return (
      <DropStyle ref={reference}>
         {isMobileSize && (
            <CloseDropdownMenu onClick={clickEvent}>
               <FontAwesomeIcon icon={['fas', 'times']} size='2x' />
            </CloseDropdownMenu>
         )}
         {/* <DropLinkItem>Alaplap</DropLinkItem> */}
         <DropLinkItem to='/vga' onClick={closeNavbar}>
            Videókártya
         </DropLinkItem>
         {/* <DropLinkItem>Processzor</DropLinkItem>
         <DropLinkItem>Memória</DropLinkItem>
         <DropLinkItem>Merevlemez</DropLinkItem>
         <DropLinkItem>SSD</DropLinkItem> */}
      </DropStyle>
   )
}

export default DropMenu
