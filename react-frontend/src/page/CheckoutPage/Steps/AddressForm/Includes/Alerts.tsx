import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { setIsInsertSuccess } from '../../../../../app/slices/Checkout/UserDetailsSlice'

import { Grow, IconButton, Alert } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const Alerts: React.FC<{
   isModified: boolean
   setIsModified: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ isModified, setIsModified }) => {
   const dispatch = useAppDispatch()
   const isInsertWasSuccess = useAppSelector((state) => state.userDetails.isInsertSuccess)
   return (
      <>
         <Grow mountOnEnter unmountOnExit in={isInsertWasSuccess}>
            <Alert
               action={
                  <IconButton
                     onClick={() => {
                        dispatch(setIsInsertSuccess(false))
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
