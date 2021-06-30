import React from 'react'
import { DropStyle } from '../DropMenuStyle'
// import { Link } from 'react-router-dom'
// import { CSSTransition } from 'react-transition-group'
// import styles from '../Drop.module.css'

type Prop = {
   reference: React.MutableRefObject<null>
}

const DropMenu: React.FC<Prop> = ({ reference }) => {
   return <DropStyle ref={reference}>{/* <DropLinkItem>Személyes adatok</DropLinkItem> */}</DropStyle>
}

export default DropMenu
