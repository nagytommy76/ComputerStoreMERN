import React from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Prop = {
   reference: React.MutableRefObject<null>
   setIsShopDropOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropMenu: React.FC<Prop> = ({ reference, setIsShopDropOpen }) => {
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)
   const clickEvent = (event: React.MouseEvent) => {
      event.stopPropagation()
      setIsShopDropOpen(false)
   }
   return (
      <DropStyle ref={reference}>
         {isMobileSize && (
            <CloseDropdownMenu onClick={clickEvent}>
               <FontAwesomeIcon icon={['fas', 'times']} size='2x' />
            </CloseDropdownMenu>
         )}
         {/* <DropLinkItem>Alaplap</DropLinkItem> */}
         <DropLinkItem to='/vga'>Videókártya</DropLinkItem>
         {/* <DropLinkItem>Processzor</DropLinkItem>
         <DropLinkItem>Memória</DropLinkItem>
         <DropLinkItem>Merevlemez</DropLinkItem>
         <DropLinkItem>SSD</DropLinkItem> */}
      </DropStyle>
   )
}

export default DropMenu
