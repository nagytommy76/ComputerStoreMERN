import React, { useEffect, useState } from 'react'

import { AccordionSummaryTypography } from '../Styles'
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
      <AccordionSummary
         sx={{ backgroundColor: '#3d5a80', color: '#FFF' }}
         expandIcon={<ExpandMoreIcon />}
         aria-controls={`panel${index}bh-content`}
         id={`panel${index}bh-header`}
      >
         <AccordionSummaryTypography>{formattedDate}</AccordionSummaryTypography>
         <Typography>
            <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </Typography>
      </AccordionSummary>
   )
}

export default AccordionSummaryComponent
