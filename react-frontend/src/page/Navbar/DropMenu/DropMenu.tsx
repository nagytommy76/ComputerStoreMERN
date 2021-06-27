import React from 'react'
import { DropStyle, DropLinkItem } from './DropMenuStyle'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import styles from '../Drop.module.css'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   return (
      <DropStyle ref={reference}>
         <DropLinkItem to='/register'>Regisztráció</DropLinkItem>
         <DropLinkItem to='/login'>Belépés</DropLinkItem>
         <DropLinkItem to='/'>Welcome</DropLinkItem>
      </DropStyle>
   )
}

export default DropMenu
