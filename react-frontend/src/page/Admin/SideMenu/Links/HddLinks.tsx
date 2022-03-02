import React from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'

const BaseListItem = React.lazy(() => import('./BaseListItem'))

const HddLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({
   setSideBarOpen,
}) => {
   return (
      <List>
         <Link to='hdd/insert' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='Merevlemez bevitele' />
         </Link>
         <Link to='hdd/modify' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='Merevlemez módosítása' />
         </Link>
         <Link to='hdd/delete' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='Merevlemez törlése' />
         </Link>
      </List>
   )
}

export default HddLinks
