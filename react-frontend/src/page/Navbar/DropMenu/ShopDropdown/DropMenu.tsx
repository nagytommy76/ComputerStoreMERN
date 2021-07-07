import React from 'react'
import { DropStyle, DropLinkItem } from '../DropMenuStyle'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   return (
      <DropStyle ref={reference}>
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
