import React from 'react'
import { NavStyle, BrandStyle, StyledUnorderedList, StylesListItems } from './NavbarStyles'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <NavStyle>
         <BrandStyle to='/'>
            <h1>ComputerStore</h1>
         </BrandStyle>
         <StyledUnorderedList>
            <StylesListItems>
               <Link to='/login'>Belépés</Link>
            </StylesListItems>
            <StylesListItems>
               <Link to='/register'>Regisztráció</Link>
            </StylesListItems>
            <StylesListItems>Shop Menü</StylesListItems>
         </StyledUnorderedList>
      </NavStyle>
   )
}

export default Navbar
