import React, { useState } from 'react'
import { NavStyle, BrandStyle, StyledUnorderedList, StylesListItems } from './NavbarStyles'
import { Link } from 'react-router-dom'

const DropMenu = React.lazy(() => import('./DropMenu/DropMenu'))

const Navbar = () => {
   const [isDropOpen, setIsDropOpen] = useState(false)
   return (
      <>
         <NavStyle>
            <BrandStyle to='/'>ComputerStore</BrandStyle>
            <StyledUnorderedList>
               <Link to='/login'>
                  <StylesListItems>Belépés</StylesListItems>
               </Link>
               <Link to='/register'>
                  <StylesListItems>Regisztráció</StylesListItems>
               </Link>
               <StylesListItems onMouseEnter={() => setIsDropOpen(true)} onMouseLeave={() => setIsDropOpen(false)}>
                  Shop Menü
               </StylesListItems>
            </StyledUnorderedList>
            <DropMenu />
         </NavStyle>
      </>
   )
}

export default Navbar
