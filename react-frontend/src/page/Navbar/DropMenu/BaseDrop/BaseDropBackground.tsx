import React, { ReactNode, useContext } from 'react'
import Backdrop from '@mui/material/Backdrop'
import { NavbarContext } from '../../NavbarContext'

const BaseDropBackground: React.FC<{
   children: ReactNode
}> = ({ children }) => {
   const {
      state: { isShopDropOpen, isUserDropOpen, isCartOpen },
   } = useContext(NavbarContext)
   return (
      <Backdrop
         sx={{ zIndex: 5, backgroundColor: 'rgba(59, 59, 59, .3)' }}
         open={isShopDropOpen || isUserDropOpen || isCartOpen}
      >
         {children}
      </Backdrop>
   )
}

export default BaseDropBackground
