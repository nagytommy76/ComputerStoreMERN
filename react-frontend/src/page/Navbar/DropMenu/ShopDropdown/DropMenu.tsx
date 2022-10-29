import React, { useContext } from 'react'
import useClose from '../Hook/useClose'
import { NavbarContext } from '../../NavbarContext'

import ShopMenuLinkItems from './ShopMenuLinkItems'
import Menu from '@mui/material/Menu'

const DropMenu: React.FC = () => {
   const shopAnchorEl = useContext(NavbarContext).state.shopAnchorEl
   const open = Boolean(shopAnchorEl)

   const closeDropMenu = useClose()
   return (
      <Menu
         anchorEl={shopAnchorEl}
         id='shop-menu'
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
         <ShopMenuLinkItems />
      </Menu>
   )
}

export default DropMenu
