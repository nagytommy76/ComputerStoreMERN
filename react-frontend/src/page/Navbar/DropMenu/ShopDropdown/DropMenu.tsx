import React from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)
   return (
      <DropStyle ref={reference}>
         {isMobileSize && (
            <CloseDropdownMenu>
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
