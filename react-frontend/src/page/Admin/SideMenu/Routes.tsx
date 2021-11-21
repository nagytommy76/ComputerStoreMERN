import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AccordionContainer } from './RoutesStyles'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const Routes = () => {
   const [expanded, setExpanded] = useState<string | false>(false)

   const handleExpanded = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false)

   return (
      <AccordionContainer>
         <Accordion expanded={expanded === 'panel1'} onChange={handleExpanded('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
               <Typography variant='body1'>VGA</Typography>
            </AccordionSummary>
            <AccordionDetails>
               <List>
                  <Link to='vga/insert'>
                     <ListItem button>
                        <Typography variant='subtitle1'>Vga bevitele</Typography>
                     </ListItem>
                  </Link>
                  <Link to='vga/modify'>
                     <ListItem button>
                        <Typography variant='subtitle1'>Vga módosítása</Typography>
                     </ListItem>
                  </Link>
               </List>
            </AccordionDetails>
         </Accordion>
         <Accordion expanded={expanded === 'panel2'} onChange={handleExpanded('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel2bh-content' id='panel2bh-header'>
               <Typography variant='subtitle1'>Processzor</Typography>
            </AccordionSummary>
            <List>
               <Link to='cpu/insert'>
                  <ListItem button>
                     <Typography variant='subtitle1'>CPU bevitele</Typography>
                  </ListItem>
               </Link>
            </List>
         </Accordion>
      </AccordionContainer>
   )
}
// https://codepen.io/raubaca/pen/PZzpVe?editors=1100
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
// https://reactjsexample.com/tag/accordion/

export default Routes
