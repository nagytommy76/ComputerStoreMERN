import React, { ReactNode } from 'react'
import Backdrop from '@mui/material/Backdrop'

const BaseDropBackground: React.FC<{
   isDropOpen: boolean
   children: ReactNode
}> = ({ isDropOpen, children }) => {
   return (
      <Backdrop sx={{ zIndex: 5 }} open={isDropOpen}>
         {children}
      </Backdrop>
   )
}

export default BaseDropBackground
