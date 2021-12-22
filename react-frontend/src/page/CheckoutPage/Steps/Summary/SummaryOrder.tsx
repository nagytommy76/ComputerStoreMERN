import React from 'react'
import { SummaryContainer } from './Styles'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

const UserDetailsSection = React.lazy(() => import('./UserDetails'))
const MakeOrderButton = React.lazy(() => import('./MakeOrder/MakeOrder'))

const SummaryOrder = () => {
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
         <MakeOrderButton />
      </SummaryContainer>
   )
}

export default SummaryOrder
