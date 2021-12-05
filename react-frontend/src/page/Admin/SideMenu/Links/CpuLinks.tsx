import React from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'

const BaseListItem = React.lazy(() => import('./BaseListItem'))

const CpuLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setSideBarOpen }) => {
   return (
      <List>
         <Link to='cpu/insert' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='CPU bevitele' />
         </Link>
         <Link to='cpu/modify' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='CPU módosítása' />
         </Link>
         <Link to='cpu/delete' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='CPU törlése' />
         </Link>
      </List>
   )
}

export default CpuLinks
