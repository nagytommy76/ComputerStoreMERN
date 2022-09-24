import React, { useContext } from 'react'
import { DropLinkItem } from '../DropMenuStyle'
import { useAppSelector } from '../../../../app/hooks'
import { NavbarContext } from '../../NavbarContext'
import { useLocation } from 'react-router-dom'

import { useAppDispatch } from '../../../../app/hooks'
import { setProducts, setIsFetching } from '../../../../app/slices/ProductsSlice'
import { setProductName } from '../../../../app/slices/Filter/BaseFilterDataSlice'

import { StyledMenuItem } from '../DropMenuStyle'
import Menu from '@mui/material/Menu'

const DropMenu: React.FC = () => {
   // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

   const location = useLocation()
   const dispatch = useAppDispatch()
   const isMobileSize = useAppSelector(state => state.mobile.isMobile)
   const { setIsShopDropOpen, setIsNavbarOpen, anchorEl, setAnchorEl } = useContext(NavbarContext)
   const open = Boolean(anchorEl)
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

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      setIsShopDropOpen(false)
      setAnchorEl(null)
   }

   const closeNavbar = (event: React.MouseEvent<HTMLAnchorElement>, linkTo: string) => {
      setAnchorEl(null)
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
      <Menu
         anchorEl={anchorEl}
         id='account-menu'
         open={open}
         onClose={closeDropMenu}
         onClick={closeDropMenu}
         MenuListProps={{ onMouseLeave: closeDropMenu }}
         PaperProps={{
            elevation: 0,
            sx: {
               overflow: 'visible',
               filter: 'drop-shadow(0px 2px 8px #27272751)',
               mt: 1.5,
            },
         }}
         transformOrigin={{ horizontal: 'center', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
         <StyledMenuItem sx={{ paddingLeft: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/vga')} to='/vga'>
               Videókártya
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/cpu')} to='/cpu'>
               Processzor
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/memory')} to='/memory'>
               Memória
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/hdd')} to='/hdd'>
               Merevlemez
            </DropLinkItem>
         </StyledMenuItem>
         <StyledMenuItem sx={{ padding: 0 }}>
            <DropLinkItem onClick={e => closeNavbar(e, '/ssd')} to='/ssd'>
               SSD
            </DropLinkItem>
         </StyledMenuItem>
      </Menu>
   )
}

export default DropMenu
