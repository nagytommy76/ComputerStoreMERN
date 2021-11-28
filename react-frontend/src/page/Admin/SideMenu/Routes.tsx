import React, { useState } from 'react'
import { AccordionContainer } from './RoutesStyles'

const VgaLink = React.lazy(() => import('./Links/VgaLinks'))
const CpuLink = React.lazy(() => import('./Links/CpuLinks'))
const BaseAccordionPanel = React.lazy(() => import('./BaseAccordionPanel'))

const Routes: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setSideBarOpen }) => {
   const [expanded, setExpanded] = useState<string | false>(false)

   const handleExpanded = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false)

   return (
      <AccordionContainer>
         <BaseAccordionPanel expanded={expanded} handleExpanded={handleExpanded} panelNumber='panel1' productType='vga'>
            <VgaLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
         <BaseAccordionPanel expanded={expanded} handleExpanded={handleExpanded} panelNumber='panel2' productType='cpu'>
            <CpuLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
      </AccordionContainer>
   )
}
// https://codepen.io/raubaca/pen/PZzpVe?editors=1100
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
// https://reactjsexample.com/tag/accordion/

export default Routes
