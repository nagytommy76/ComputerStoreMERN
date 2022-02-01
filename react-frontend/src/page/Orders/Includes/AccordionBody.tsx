import React from 'react'
import { UserOrders } from '../OrderTypes'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import NumberFormat from 'react-number-format'

const AccordionSummary = React.lazy(() => import('./AccordionSummary'))
const Products = React.lazy(() => import('./Products'))

const AccordionBody: React.FC<{
   index: number
   userOrders: UserOrders
   expanded: string | false
   handleAccordionOpen: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}> = ({ index, userOrders, expanded, handleAccordionOpen }) => {
   const timestampToDate = (timestamp: number) => {
      const date = new Date(timestamp * 1000)
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
   }

   return (
      <Accordion disableGutters expanded={expanded === `panel${index}`} onChange={handleAccordionOpen(`panel${index}`)}>
         <AccordionSummary index={index} orderedAt={userOrders.orderedAt} totalPrice={userOrders.totalPrice} />
         <AccordionDetails>
            <Typography>Fizetési mód: {userOrders.paymentMethod === 'stripeCard' ? 'Kártya' : 'Készpénz'}</Typography>
            {userOrders.payedAt !== 0 && <Typography>Fizetve: {timestampToDate(userOrders.payedAt)}</Typography>}
            {userOrders.deliveryPrice !== 0 && (
               <Typography>
                  Szállítási költség:{' '}
                  <NumberFormat value={userOrders.deliveryPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />{' '}
               </Typography>
            )}
            <Products products={userOrders.products} />
         </AccordionDetails>
      </Accordion>
   )
}

export default AccordionBody
