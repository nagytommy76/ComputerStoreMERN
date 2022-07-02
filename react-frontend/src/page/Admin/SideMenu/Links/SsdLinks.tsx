import React from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'

const BaseListItem = React.lazy(() => import('./BaseListItem'))

const SsdLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({
   setSideBarOpen,
}) => {
   return (
      <List>
         <Link to='ssd/insert' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='SSD bevitele' />
         </Link>
         <Link to='ssd/modify' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='SSD módosítása' />
         </Link>
         <Link to='ssd/delete' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='SSD törlése' />
         </Link>
      </List>
   )
}

export default SsdLinks
