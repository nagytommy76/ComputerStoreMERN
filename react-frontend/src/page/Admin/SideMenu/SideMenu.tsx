import React, { useState } from 'react'
import Routes from './Routes'

import Drawer from '@mui/material/Drawer'

const SideMenu = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false)
   return (
      <>
         <button onClick={() => setIsOpen((prev) => !prev)}>Open</button>
         <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen((prev) => !prev)}>
            <Routes />
         </Drawer>
      </>
   )
}

export default SideMenu
