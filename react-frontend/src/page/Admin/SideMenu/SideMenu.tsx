import React from 'react'
import styled from 'styled-components'
import { navbarHeight } from '../../Navbar/NavbarStyles'
import Routes from './Routes'

const SideMenu = () => {
   return (
      <SideMenuStyle>
         <Routes />
      </SideMenuStyle>
   )
}

const SideMenuStyle = styled.section`
   width: 300px;
   position: relative;
   /* height: calc(100% - ${navbarHeight}); */
   /* position: fixed; */
   /* left: 0;
   bottom: 0; */
   background-color: white;
`

export default SideMenu
