import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './Drop.module.css'

const BaseDropBackground: React.FC<{ isDropOpen: boolean; nodeRef: React.MutableRefObject<null> }> = ({
   isDropOpen,
   nodeRef,
   children
}) => {
   return (
      <CSSTransition
         in={isDropOpen}
         unmountOnExit
         mountOnEnter
         timeout={300}
         nodeRef={nodeRef}
         classNames={{
            enter: styles.BackgroundEnter,
            enterActive: styles.BackgroundEnterActive,
            exit: styles.BackgroundExit,
            exitActive: styles.BackgroundExitActive
         }}>
         {children}
      </CSSTransition>
   )
}

export default BaseDropBackground
