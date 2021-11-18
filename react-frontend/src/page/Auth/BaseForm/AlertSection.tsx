import React from 'react'

import { globalHistory } from '../../..'

import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const AlertSection = () => {
   console.log(globalHistory)
   return (
      <>
         {globalHistory.location.state && (
            <Fade in={globalHistory.location.state.isFailure}>
               <Alert sx={{ width: '90%' }} severity='error'>
                  {globalHistory.location.state.message}
               </Alert>
            </Fade>
         )}
      </>
   )
}

export default AlertSection
