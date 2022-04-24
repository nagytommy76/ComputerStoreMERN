import React, { ReactNode } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const BaseAccordionPanel: React.FC<{
   children: ReactNode
   panelNumber: string
   productType: string
   expanded: string | false
   handleExpanded: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}> = ({ children, panelNumber, productType, expanded, handleExpanded }) => {
   return (
      <Accordion expanded={expanded === panelNumber} onChange={handleExpanded(panelNumber)}>
         <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${panelNumber}bh-content`}
            id={`panel${panelNumber}bh-header`}
         >
            <Typography variant='body1'>{productType.toUpperCase()}</Typography>
         </AccordionSummary>
         {children}
      </Accordion>
   )
}

export default BaseAccordionPanel
