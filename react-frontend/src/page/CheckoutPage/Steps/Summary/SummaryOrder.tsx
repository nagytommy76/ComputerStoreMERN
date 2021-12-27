import React, { useState } from 'react'
import { SummaryContainer } from './Styles'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Fade from '@mui/material/Fade'
import Alert from '@mui/material/Alert'

const UserDetailsSection = React.lazy(() => import('./UserDetails'))
const MakeOrderButton = React.lazy(() => import('./MakeOrder/MakeOrder'))
const PaymentContainer = React.lazy(() => import('../PaymentOption/PaymentContainer'))

const SummaryOrder = () => {
   const [isSuccesAlertOpen, setIsSuccessAlertOpen] = useState<boolean>(false)
   return (
      <SummaryContainer>
         <UserDetailsSection />
         <Card>
            <CardContent>
               <Typography variant='h5'>Fizetve:</Typography>
               <Typography mt={1} variant='body1'>
                  Bankkártyával, egyelőre hardcoded!!!
               </Typography>
            </CardContent>
         </Card>
         <MakeOrderButton setAlertOpen={setIsSuccessAlertOpen} />
         <PaymentContainer />
         <Fade in={isSuccesAlertOpen}>
            <Alert severity='success'>A Termékek sikeresen megrendelésre kerültek! Hamarosan átirányítunk a főoldalra!</Alert>
         </Fade>
      </SummaryContainer>
   )
}

export default SummaryOrder
