import React, { ReactNode } from 'react'

import Tooltip from '@mui/material/Tooltip'

const TooltipForDisabled: React.FC<{
   tooltipText: string
   isComponentDisabled?: boolean
   children: ReactNode
}> = ({ children, tooltipText, isComponentDisabled = false }) => {
   return (
      <>
         {isComponentDisabled ? (
            <Tooltip title={tooltipText} arrow>
               <span>{children}</span>
            </Tooltip>
         ) : (
            children
         )}
      </>
   )
}

export default TooltipForDisabled
