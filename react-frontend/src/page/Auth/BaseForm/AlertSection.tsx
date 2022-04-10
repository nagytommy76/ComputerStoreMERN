import React from 'react'
import { useLocation } from 'react-router-dom'

import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const AlertSection = () => {
   const location = useLocation() as { state: { isFailure: boolean; message: string } | null }
   return (
      <>
         {location.state && (
            <Fade in={location.state.isFailure}>
               <Alert sx={{ width: '90%' }} severity='error'>
                  {location.state.message}
               </Alert>
            </Fade>
         )}
      </>
   )
}

export default AlertSection
