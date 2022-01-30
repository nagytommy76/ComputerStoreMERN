import React, { useState } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'

const AccordionBody: React.FC<{}> = () => {
   const [expanded, setExpanded] = useState<string | false>(false)
   const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
   }
   return (
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
            <Typography>Dátum jön ide</Typography>
         </AccordionSummary>
         <AccordionDetails>
            <Typography>
               Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissimddddh
               quam.
            </Typography>
         </AccordionDetails>
      </Accordion>
   )
}

export default AccordionBody
