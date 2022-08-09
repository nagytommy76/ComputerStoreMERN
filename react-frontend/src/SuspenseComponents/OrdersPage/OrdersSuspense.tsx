import React from 'react'

import { OrdersPageContainer } from '../../page/Orders/Styles'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'

const OrdersSuspense = () => {
   return (
      <OrdersPageContainer>
         <Paper>
            <h1>Helló</h1>
            <Skeleton height={30} width='50%' animation='wave' variant='rectangular' />
         </Paper>
      </OrdersPageContainer>
   )
}

export default OrdersSuspense
