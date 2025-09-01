import { useState } from 'react'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import Typography from '@mui/material/Typography'

export default function FirstVisitAlert() {
   const [open, setOpen] = useState(true)

   const handleClick = () => {
      setOpen(true)
   }

   const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
      if (reason === 'clickaway') {
         return
      }

      setOpen(false)
   }

   return (
      <Snackbar open={open} autoHideDuration={null} onClose={handleClose}>
         <Alert onClose={handleClose} severity='success' variant='standard' sx={{ width: '100%' }}>
            <Typography variant='h5' gutterBottom>
               Kedves látogató!
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
               Először is köszönöm, hogy kipróbálod az alkalmazásomat!
               <Typography variant='caption' fontSize={15}>
                  &#128522;
               </Typography>
            </Typography>
            <Typography variant='subtitle2'>
               Ez egy hobbi alkalmazás amit a tudásom bővítése és bemutatása céljából hoztam létre.
            </Typography>
            <Typography variant='subtitle2'>
               Ezért egy ingyenes backend szervert használok{' '}
               <a href='https://render.com/' target='_blank'>
                  ( Render.com )
               </a>
               ,
            </Typography>
            <Typography variant='subtitle2'>
               ami ha nincs használatban leáll, így előfordulhat, hogy tovább tart betölteni a termékeket ( 30
               - 60 mp ).
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
               Kérlek légy türelemmel!{' '}
               <Typography variant='caption' fontSize={15}>
                  &#128522;
               </Typography>
            </Typography>
            <Typography variant='subtitle1'>Nagy Tamás</Typography>
         </Alert>
      </Snackbar>
   )
}
