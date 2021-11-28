import React from 'react'
import { NavigationLink } from '../DetailsStyle'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Breadcrumbs from '@mui/material/Breadcrumbs'

const TopNavigation = () => {
   let { pathname } = useLocation()
   const FirstPage = pathname.split('/')[1]

   return (
      <Breadcrumbs aria-label='breadcrumb'>
         <Link to='/'>
            <NavigationLink>Főoldal</NavigationLink>
         </Link>
         <Link to={`/${FirstPage}`}>
            <NavigationLink>{FirstPage.toUpperCase()}</NavigationLink>
         </Link>
         <NavigationLink>{FirstPage.toUpperCase()} Adatok</NavigationLink>
      </Breadcrumbs>
   )
}

export default TopNavigation
