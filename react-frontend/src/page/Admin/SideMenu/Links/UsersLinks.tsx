import React from 'react'
import { Link } from 'react-router-dom'

import List from '@mui/material/List'

const BaseListItem = React.lazy(() => import('./BaseListItem'))

const UsersLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({
   setSideBarOpen,
}) => {
   return (
      <List>
         <Link to='user/user' onClick={() => setSideBarOpen(false)}>
            <BaseListItem displayText='Felhasználók' />
         </Link>
      </List>
   )
}

export default UsersLinks
