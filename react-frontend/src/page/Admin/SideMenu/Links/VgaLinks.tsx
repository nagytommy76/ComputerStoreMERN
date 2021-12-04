import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const VgaLinks: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setSideBarOpen }) => {
   return (
      <List>
         <Link to='vga/insert' onClick={() => setSideBarOpen(false)}>
            <ListItem button>
               <Typography variant='subtitle1'>Vga bevitele</Typography>
            </ListItem>
         </Link>
         <Link to='vga/modify' onClick={() => setSideBarOpen(false)}>
            <ListItem button>
               <Typography variant='subtitle1'>Vga módosítása</Typography>
            </ListItem>
         </Link>
         <Link to='vga/delete' onClick={() => setSideBarOpen(false)}>
            <ListItem button>
               <Typography variant='subtitle1'>Vga törlése</Typography>
            </ListItem>
         </Link>
      </List>
   )
}

export default VgaLinks
