import React from 'react'

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

const VgaIcon: React.FC<{ props?: SvgIconProps; children: React.ReactNode }> = ({ props, children }) => {
   return (
      <SvgIcon {...props} sx={{ height: 45, width: 42 }} inheritViewBox color='action'>
         {children}
      </SvgIcon>
   )
}

export default VgaIcon
