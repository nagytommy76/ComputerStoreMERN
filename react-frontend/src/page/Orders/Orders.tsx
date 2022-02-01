import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { UserOrders } from './OrderTypes'

import { OrdersPageContainer } from './Styles'

import Typography from '@mui/material/Typography'

const AccordionBody = React.lazy(() => import('./Includes/AccordionBody'))

const Orders = () => {
   const [orders, setOrders] = useState<UserOrders[]>([])
   const [expanded, setExpanded] = useState<string | false>('panel0')

   useEffect(() => {
      axios.get('/order/get-orders').then((resultOrders: AxiosResponse<UserOrders[], any>) => {
         setOrders(resultOrders.data)
      })
   }, [])

   const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
   }

   return (
      <OrdersPageContainer>
         <Typography align='center' variant='h1' color='gray' m={2}>
            Korábbi rendelések
         </Typography>
         {orders.length > 0 ? (
            orders.map((currentOrder, index) => (
               <AccordionBody
                  key={currentOrder._id}
                  expanded={expanded}
                  handleAccordionOpen={handleChange}
                  index={index}
                  userOrders={currentOrder}
               />
            ))
         ) : (
            <Typography align='center' variant='h1' color='gray' m={2}>
               Nem rendeltél még tőlünk :(
            </Typography>
         )}
      </OrdersPageContainer>
   )
}

export default Orders
