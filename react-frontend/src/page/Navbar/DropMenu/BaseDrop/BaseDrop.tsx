import React, { ReactNode, useContext } from 'react'
import { NavbarContext } from '../../NavbarContext'

import { StyledListItems } from '../../LinkItems/LinkItemStyles'

type Props = {
   children: ReactNode
   isDropOpen: boolean
   text: string
   setIsDropOpen: (value: boolean) => void
}

const BaseDrop: React.FC<Props> = ({ isDropOpen, setIsDropOpen, text, children }) => {
   const { setAnchorEl } = useContext(NavbarContext)
   const openDrop = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
      setIsDropOpen(true)
   }

   return (
      <StyledListItems onMouseEnter={openDrop} onClick={openDrop}>
         {text}
         {children}
      </StyledListItems>
   )
}

export default BaseDrop
