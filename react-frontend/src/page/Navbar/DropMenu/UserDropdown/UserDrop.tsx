import React, { useContext } from 'react'
import { NavbarActionTypes } from '../../Reducer/NavbarReducer'
import { NavbarContext } from '../../NavbarContext'

import UserMenuLinkItems from './UserMenuLinkItems'
import Menu from '@mui/material/Menu'

const DropMenu: React.FC = () => {
   const {
      state: { userAnchorEl },
      dispatch,
   } = useContext(NavbarContext)
   const open = Boolean(userAnchorEl)

   const closeDropMenu = (event: React.MouseEvent) => {
      event.stopPropagation()
      dispatch({ type: NavbarActionTypes.SET_IS_USER_DROP_OPEN, payload: false })
      dispatch({ type: NavbarActionTypes.SET_USER_ANCHOR_EL, payload: null })
   }

   return (
      <Menu
         anchorEl={userAnchorEl}
         id='user-menu'
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
         <UserMenuLinkItems />
      </Menu>
   )
}

export default DropMenu
