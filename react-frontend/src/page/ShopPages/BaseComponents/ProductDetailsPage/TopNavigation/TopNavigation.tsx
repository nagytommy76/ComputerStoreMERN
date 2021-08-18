import React from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { TopNavigationStyle, NavigationLink } from '../DetailsStyle'
import { useLocation } from 'react-router'
import { LocationType } from '../../../Vga/VgaDetails/VgaDetails'
import { Link } from 'react-router-dom'

const TopNavigation = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   let location = useLocation<LocationType>()
   const FirstPage = location.pathname.split('/')[1]
   const CurrentPage = location.pathname.split('/')[2]

   return (
      <TopNavigationStyle isDarkTheme={isDarkTheme}>
         <Link to='/'>
            <NavigationLink>Főoldal</NavigationLink>
         </Link>
         <p>/</p>
         <Link to={FirstPage}>
            <NavigationLink>{FirstPage}</NavigationLink>
         </Link>
         <p>/</p>
         <NavigationLink>{CurrentPage}</NavigationLink>
      </TopNavigationStyle>
   )
}

export default TopNavigation
