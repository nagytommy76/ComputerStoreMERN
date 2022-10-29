import React, { useContext } from 'react'
import useClose from '../Hook/useClose'
import { NavbarContext } from '../../NavbarContext'

import UserMenuLinkItems from './UserMenuLinkItems'
import Menu from '@mui/material/Menu'

const DropMenu: React.FC = () => {
   const userAnchorEl = useContext(NavbarContext).state.userAnchorEl
   const open = Boolean(userAnchorEl)

   const closeDropMenu = useClose('user')
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
