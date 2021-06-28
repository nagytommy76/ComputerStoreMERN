import React, { useRef, useState } from 'react'
import { NavStyle, BrandStyle, StyledUnorderedList, DropdownBackground } from './NavbarStyles'
import { StyledListItems } from './LinkItems/LinkItemStyles'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from '../../app/hooks'
import styles from './Drop.module.css'

import DropMenu from './DropMenu/DropMenu'
import LinkItem from './LinkItems/LinkItem'

const Navbar = () => {
   const userLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)
   const [isDropOpen, setIsDropOpen] = useState(false)
   const dropRef = useRef(null)
   const nodeRef = useRef(null)
   return (
      <>
         <NavStyle onMouseLeave={() => setIsDropOpen(false)}>
            <BrandStyle to='/'>ComputerStore</BrandStyle>
            <StyledUnorderedList>
               {!userLoggedIn && <LinkItem to='/login' linkText='Belépés' />}
               {!userLoggedIn && <LinkItem to='/register' linkText='Regisztráció' />}
               {userLoggedIn && <StyledListItems>{userName}</StyledListItems>}
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
