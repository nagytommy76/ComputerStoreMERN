import React, { useEffect, useState } from 'react'

import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'

import NumberFormat from 'react-number-format'

const AccordionSummaryComponent: React.FC<{ index: number; orderedAt: string; totalPrice: number }> = ({
   index,
   orderedAt,
   totalPrice,
}) => {
   const [formattedDate, setFormattedDate] = useState<string>('')
   useEffect(() => {
      const date = new Date(orderedAt)
      setFormattedDate(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`)
   }, [orderedAt])

   return (
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
         <Typography sx={{ width: '30%' }}>{formattedDate}</Typography>
         <Typography>
            <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </Typography>
      </AccordionSummary>
   )
}

export default AccordionSummaryComponent
