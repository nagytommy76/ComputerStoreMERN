import React from 'react'

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const VgaIcon: React.FC<{ props?: SvgIconProps; children: React.ReactNode }> = ({ props, children }) => {
   return (
      <SvgIcon {...props} viewBox='0 0 42 40' color='info' fontSize='large'>
         {children}
      </SvgIcon>
   )
}

export default VgaIcon
