import React from 'react'
import { DropStyle, DropLinkItem } from './DropMenuStyle'
// import { Link } from 'react-router-dom'
// import { CSSTransition } from 'react-transition-group'
// import styles from '../Drop.module.css'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   return (
      <DropStyle ref={reference}>
         <DropLinkItem>Alaplap</DropLinkItem>
         <DropLinkItem>Videókártya</DropLinkItem>
         <DropLinkItem>Processzor</DropLinkItem>
         <DropLinkItem>Memória</DropLinkItem>
         <DropLinkItem>Merevlemez</DropLinkItem>
         <DropLinkItem>SSD</DropLinkItem>
      </DropStyle>
   )
}

export default DropMenu
