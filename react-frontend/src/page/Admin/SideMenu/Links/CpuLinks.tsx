import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const CpuLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setSideBarOpen }) => {
   return (
      <List>
         <Link to='cpu/insert' onClick={() => setSideBarOpen(false)}>
            <ListItem button>
               <Typography variant='subtitle1'>CPU bevitele</Typography>
            </ListItem>
         </Link>
         <Link to='cpu/modify' onClick={() => setSideBarOpen(false)}>
            <ListItem button>
               <Typography variant='subtitle1'>CPU Módosítása</Typography>
            </ListItem>
         </Link>
         <Link to='cpu/delete' onClick={() => setSideBarOpen(false)}>
            <ListItem button>
               <Typography variant='subtitle1'>CPU-k Törlése</Typography>
            </ListItem>
         </Link>
      </List>
   )
}

export default CpuLinks
