import React from 'react'
import { NavStyle } from './NavbarStyles'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <NavStyle>
         <Link to='/'>
            <h1>CompStore</h1>
         </Link>
         <span>Menü</span>
      </NavStyle>
   )
}

export default Navbar
