import React, { ReactNode } from 'react'

import { StyledListItems } from '../../LinkItems/LinkItemStyles'
import Fade from '@mui/material/Fade'

type Props = {
   children: ReactNode
   isDropOpen: boolean
   text: string
   setIsDropOpen: (value: boolean) => void
}

const BaseDrop: React.FC<Props> = ({ isDropOpen, setIsDropOpen, text, children }) => {
   const openDrop = () => {
      setIsDropOpen(true)
   }

   return (
      <StyledListItems onMouseEnter={openDrop} onClick={openDrop}>
         {text}
         <Fade mountOnEnter unmountOnExit timeout={300} in={isDropOpen}>
            <div>{children}</div>
         </Fade>
      </StyledListItems>
   )
}

export default BaseDrop
