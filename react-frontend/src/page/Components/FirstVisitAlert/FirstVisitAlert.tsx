import { useState, useEffect } from 'react'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setIsFirstVisit } from '../../../app/slices/FirstVisit'

import Typography from '@mui/material/Typography'

export default function FirstVisitAlert() {
   const [open, setOpen] = useState(false)
   const dispatch = useAppDispatch()
   const isFirstVisit = useAppSelector((state) => state.firstVisit.isFirstVisit)

   useEffect(() => {
      if (isFirstVisit) {
         setOpen(true)
      }
   }, [isFirstVisit])

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
         return
      }
      dispatch(setIsFirstVisit(false))
      setOpen(false)
   }

   return (
      <Snackbar open={open} autoHideDuration={null} onClose={handleClose}>
         <Alert onClose={handleClose} severity='success' variant='filled' sx={{ width: '100%' }}>
            <Typography variant='h5' gutterBottom>
               Kedves látogató!
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
               Először is köszönöm, hogy kipróbálod az alkalmazásomat!{' '}
               <Typography variant='caption' fontSize={15}>
                  &#128522;
               </Typography>
            </Typography>
            <Typography variant='subtitle2'>
               Ez egy hobbi weboldal amit a tudásom bővítése és bemutatása céljából hoztam létre.
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
               E-mailek küldése esetén ha nem látod az üzenetedet, kérlek ellenőrizd a spam mappát is.
            </Typography>
            <Typography variant='h6'>
               <a href='https://www.nagytamas93.hu/' target='_blank'>
                  Nagy Tamás
               </a>
            </Typography>
         </Alert>
      </Snackbar>
   )
}
