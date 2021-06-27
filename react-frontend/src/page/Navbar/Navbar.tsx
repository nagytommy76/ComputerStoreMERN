import React, { useRef, useState } from 'react'
import { NavStyle, BrandStyle, StyledUnorderedList, DropdownBackground } from './NavbarStyles'
import { StyledListItems } from './LinkItems/LinkItemStyles'
import { CSSTransition } from 'react-transition-group'
import styles from './Drop.module.css'

import DropMenu from './DropMenu/DropMenu'
import LinkItem from './LinkItems/LinkItem'

const Navbar = () => {
   const [isDropOpen, setIsDropOpen] = useState(true)
   const dropRef = useRef(null)
   const nodeRef = useRef(null)
   return (
      <>
         <NavStyle onMouseLeave={() => setIsDropOpen(false)}>
            <BrandStyle to='/'>ComputerStore</BrandStyle>
            <StyledUnorderedList>
               <LinkItem to='/login' linkText='Belépés' />
               <LinkItem to='/register' linkText='Regisztráció' />
               <StyledListItems onMouseEnter={() => setIsDropOpen(true)}>
                  Shop Menü
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
                        exitActive: styles.DropExitActive
                     }}>
                     <DropMenu reference={dropRef} />
                  </CSSTransition>
               </StyledListItems>
            </StyledUnorderedList>
         </NavStyle>
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
            <DropdownBackground ref={nodeRef}></DropdownBackground>
         </CSSTransition>
      </>
   )
}

export default Navbar
