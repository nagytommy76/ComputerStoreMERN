import React from 'react'
import { NavStyle, BrandStyle, StyledUnorderedList, StylesListItems } from './NavbarStyles'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <NavStyle>
         <BrandStyle to='/'>ComputerStore</BrandStyle>
         <StyledUnorderedList>
            <Link to='/login'>
               <StylesListItems>Belépés</StylesListItems>
            </Link>
            <Link to='/register'>
               <StylesListItems>Regisztráció</StylesListItems>
            </Link>
            <StylesListItems>Shop Menü</StylesListItems>
         </StyledUnorderedList>
      </NavStyle>
   )
}

export default Navbar
