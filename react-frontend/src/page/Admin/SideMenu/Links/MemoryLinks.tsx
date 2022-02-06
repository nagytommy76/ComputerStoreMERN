import React from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'

const BaseListItem = React.lazy(() => import('./BaseListItem'))

const MemoryLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setSideBarOpen }) => {
   return (
      <List>
         <Link to='memory/insert' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='RAM bevitele' />
         </Link>
         <Link to='memory/modify' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='RAM módosítása' />
         </Link>
         <Link to='memory/delete' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='RAM törlése' />
         </Link>
      </List>
   )
}

export default MemoryLinks
