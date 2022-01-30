import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { UserOrders } from './OrderTypes'

import { OrdersPageContainer } from './Styles'

import Typography from '@mui/material/Typography'

const AccordionBody = React.lazy(() => import('./AccordionBody'))

const Orders = () => {
   const [orders, setOrders] = useState<UserOrders[]>([])
   useEffect(() => {
      axios.get('/order/get-orders').then((resultOrders: AxiosResponse<UserOrders[], any>) => {
         setOrders(resultOrders.data)
      })
   }, [])

   return (
      <OrdersPageContainer>
         <Typography align='center' variant='h1' color='gray' m={2}>
            Korábbi rendelések
         </Typography>
         {orders.map((currentOrder) => (
            <AccordionBody key={currentOrder._id} />
         ))}
      </OrdersPageContainer>
   )
}

export default Orders
