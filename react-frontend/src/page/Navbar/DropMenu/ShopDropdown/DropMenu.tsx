import React, { useContext } from 'react'
import { DropStyle, DropLinkItem, CloseDropdownMenu } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavbarContext } from '../../NavbarContext'
import { useLocation } from 'react-router-dom'

import { useAppDispatch } from '../../../../app/hooks'
import { setProducts, setIsFetching } from '../../../../app/slices/ProductsSlice'
import { setProductName } from '../../../../app/slices/Filter/BaseFilterDataSlice'

import { StyledListItems } from '../../LinkItems/LinkItemStyles'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

const DropMenu: React.FC = () => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const open = true

   const location = useLocation()
   const dispatch = useAppDispatch()
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { setIsShopDropOpen, setIsNavbarOpen } = useContext(NavbarContext)
   const locationPathArray = [
      '/vga',
      '/cpu',
      '/memory',
      '/hdd',
      '/ssd',
      '/',
      '/orders',
      '/login',
      '/register',
   ]

   const openDrop = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
      setIsShopDropOpen(true)
   }

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      setIsShopDropOpen(false)
   }

   const closeNavbar = (event: React.MouseEvent<HTMLAnchorElement>, linkTo: string) => {
      if (isMobileSize) {
         event.stopPropagation()
         setIsShopDropOpen(false)
         setIsNavbarOpen(false)
      }
      // A products oldal suspense miatt kell
      if (locationPathArray.includes(location.pathname) && location.pathname !== linkTo) {
         dispatch(setIsFetching('INIT'))
         dispatch(setProducts([]))
         dispatch(setProductName(''))
      }
   }
   return (
      // <DropStyle>
      //    <CloseDropdownMenu onClick={closeDropMenu}>
      //       <FontAwesomeIcon icon={['fas', 'times']} size='2x' />
      //    </CloseDropdownMenu>
      //    <DropLinkItem to='/vga' onClick={e => closeNavbar(e, '/vga')}>
      //       Videókártya
      //    </DropLinkItem>
      //    <DropLinkItem to='/cpu' onClick={e => closeNavbar(e, '/cpu')}>
      //       Processzor
      //    </DropLinkItem>
      //    <DropLinkItem to='/memory' onClick={e => closeNavbar(e, '/memory')}>
      //       Memória
      //    </DropLinkItem>
      //    <DropLinkItem to='/hdd' onClick={e => closeNavbar(e, '/hdd')}>
      //       Merevlemez
      //    </DropLinkItem>
      //    <DropLinkItem to='/ssd' onClick={e => closeNavbar(e, '/ssd')}>
      //       SSD
      //    </DropLinkItem>
      // </DropStyle>
      <>
         <StyledListItems onMouseEnter={openDrop} onClick={openDrop}>
            Shop Menü
         </StyledListItems>
         <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={closeNavbar}
            onClick={closeDropMenu}
            PaperProps={{
               elevation: 0,
               sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                     width: 32,
                     height: 32,
                     ml: -0.5,
                     mr: 1,
                  },
                  '&:before': {
                     content: '""',
                     display: 'block',
                     position: 'absolute',
                     top: 0,
                     right: 14,
                     width: 10,
                     height: 10,
                     bgcolor: 'background.paper',
                     transform: 'translateY(-50%) rotate(45deg)',
                     zIndex: 0,
                  },
               },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
         >
            <MenuItem
               sx={{
                  transition: 'all 0.1s linear',
                  borderLeft: '8px solid transparent',
                  '&:hover': {
                     fontWeight: 900,
                     borderLeft: '8px solid yellow',
                  },
               }}
            >
               <Avatar /> Profile
            </MenuItem>
            <MenuItem>
               <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
               <ListItemIcon>
                  <PersonAdd fontSize='small' />
               </ListItemIcon>
               Add another account
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <Settings fontSize='small' />
               </ListItemIcon>
               Settings
            </MenuItem>
            <MenuItem>
               <ListItemIcon>
                  <Logout fontSize='small' />
               </ListItemIcon>
               Logout
            </MenuItem>
         </Menu>
      </>
   )
}

export default DropMenu
