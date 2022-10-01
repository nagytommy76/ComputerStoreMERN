import React, { useContext } from 'react'
import { NavbarContext } from '../../NavbarContext'
import { NavbarActionTypes } from '../../Reducer/NavbarReducer'

import ShopMenuLinkItems from './ShopMenuLinkItems'
import Menu from '@mui/material/Menu'

const DropMenu: React.FC = () => {
   const {
      state: { shopAnchorEl },
      dispatch,
   } = useContext(NavbarContext)
   const open = Boolean(shopAnchorEl)

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch({ type: NavbarActionTypes.SET_IS_SHOP_DROP_OPEN, payload: false })
      dispatch({ type: NavbarActionTypes.SET_SHOP_ANCHOR_EL, payload: null })
   }

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
