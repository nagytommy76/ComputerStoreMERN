import React from 'react'
import { Grow, IconButton, Alert } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const Alerts: React.FC<{
   isSuccess: boolean
   setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
   isModified: boolean
   setIsModified: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isSuccess, setIsSuccess, isModified, setIsModified }) => {
   return (
      <>
         <Grow mountOnEnter unmountOnExit in={isSuccess}>
            <Alert
               action={
                  <IconButton
                     onClick={() => {
                        setIsSuccess(false)
                     }}
                     aria-label='close'
                     color='inherit'>
                     <CheckIcon />
                  </IconButton>
               }
               sx={{ marginTop: '1.5rem', width: '80%' }}
               color='success'
               severity='success'>
               A számlázási adatok sikeresen rögzítésre kerültek!
            </Alert>
         </Grow>
         <Grow mountOnEnter unmountOnExit in={isModified}>
            <Alert
               action={
                  <IconButton
                     onClick={() => {
                        setIsModified(false)
                     }}
                     aria-label='close'
                     color='inherit'>
                     <CheckIcon />
                  </IconButton>
               }
               sx={{ marginTop: '1.5rem', width: '80%' }}
               severity='info'>
               A számlázási adatok sikeresen módosultak!
            </Alert>
         </Grow>
      </>
   )
}

export default Alerts
