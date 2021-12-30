import React from 'react'
import { SummaryContainer } from './Styles'
import { useAppSelector } from '../../../../app/hooks'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

const UserDetailsSection = React.lazy(() => import('./UserDetails'))
const MakeOrderButton = React.lazy(() => import('./MakeOrder/MakeOrder'))
const PaymentContainer = React.lazy(() => import('../PaymentOption/PaymentContainer'))

const SummaryOrder = () => {
   const selectedPaymentMethod = useAppSelector((state) => state.payment.selectedPaymentMethod)
   return (
      <SummaryContainer>
         <UserDetailsSection />
         <Card>
            <CardContent>
               <Typography variant='h5'>Fizetési mód: </Typography>
               <Typography mt={1} variant='body1'>
                  {selectedPaymentMethod === 'cashOnDelivery' ? 'Készpénzes fizetés' : 'Bankkártyás fizetés'}
               </Typography>
            </CardContent>
         </Card>
         <MakeOrderButton />
         <PaymentContainer />
      </SummaryContainer>
   )
}

export default SummaryOrder
