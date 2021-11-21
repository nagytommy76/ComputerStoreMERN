import React from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { TopNavigationStyle, NavigationLink } from '../DetailsStyle'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const TopNavigation = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   let { pathname } = useLocation()
   const FirstPage = pathname.split('/')[1]
   const CurrentPage = pathname.split('/')[2]

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
         <NavigationLink>{CurrentPage.split('-')[0].toUpperCase()} Adatok</NavigationLink>
      </TopNavigationStyle>
   )
}

export default TopNavigation
