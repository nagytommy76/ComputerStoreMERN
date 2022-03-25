import React from 'react'
import { StyledListItems } from '../../LinkItems/LinkItemStyles'
import { CSSTransition } from 'react-transition-group'
import styles from './Drop.module.css'

type Props = {
   isDropOpen: boolean
   text: string
   dropRef: React.MutableRefObject<null>
   setIsDropOpen: (value: boolean) => void
}

const BaseDrop: React.FC<Props> = ({ isDropOpen, dropRef, setIsDropOpen, text, children }) => {
   const openDrop = () => {
      setIsDropOpen(true)
   }

   return (
      <StyledListItems onMouseEnter={openDrop} onClick={openDrop}>
         {text}
         <CSSTransition
            in={isDropOpen}
            unmountOnExit
            mountOnEnter
            timeout={300}
            nodeRef={dropRef}
            classNames={{
               enter: styles.DropEnter,
               enterActive: styles.DropEnterActive,
               exit: styles.DropExit,
               exitActive: styles.DropExitActive,
            }}
         >
            {children}
         </CSSTransition>
      </StyledListItems>
   )
}

export default BaseDrop
