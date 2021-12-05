import React from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'

const BaseListItem = React.lazy(() => import('./BaseListItem'))

const VgaLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setSideBarOpen }) => {
   return (
      <List>
         <Link to='vga/insert' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='VGA bevitele' />
         </Link>
         <Link to='vga/modify' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='VGA módosítása' />
         </Link>
         <Link to='vga/delete' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='VGA törlése' />
         </Link>
      </List>
   )
}

export default VgaLinks
