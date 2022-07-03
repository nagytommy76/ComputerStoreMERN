import React, { useState, lazy } from 'react'
import { AccordionContainer } from './RoutesStyles'

const BaseAccordionPanel = lazy(() => import('./BaseAccordionPanel'))
const UsersLink = lazy(() => import('./Links/UsersLinks'))

const VgaLink = lazy(() => import('./Links/VgaLinks'))
const CpuLink = lazy(() => import('./Links/CpuLinks'))
const MemoryLink = lazy(() => import('./Links/MemoryLinks'))
const HDDLink = lazy(() => import('./Links/HddLinks'))
const SSDLink = lazy(() => import('./Links/SsdLinks'))

const Routes: React.FC<{ setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({
   setSideBarOpen,
}) => {
   const [expanded, setExpanded] = useState<string | false>(false)

   const handleExpanded = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false)

   return (
      <AccordionContainer>
         <BaseAccordionPanel
            expanded={expanded}
            handleExpanded={handleExpanded}
            panelNumber='panel0'
            productType='user'
         >
            <UsersLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
         <BaseAccordionPanel
            expanded={expanded}
            handleExpanded={handleExpanded}
            panelNumber='panel1'
            productType='vga'
         >
            <VgaLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
         <BaseAccordionPanel
            expanded={expanded}
            handleExpanded={handleExpanded}
            panelNumber='panel2'
            productType='cpu'
         >
            <CpuLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
         <BaseAccordionPanel
            expanded={expanded}
            handleExpanded={handleExpanded}
            panelNumber='panel3'
            productType='ram'
         >
            <MemoryLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
         <BaseAccordionPanel
            expanded={expanded}
            handleExpanded={handleExpanded}
            panelNumber='panel4'
            productType='hdd'
         >
            <HDDLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
         <BaseAccordionPanel
            expanded={expanded}
            handleExpanded={handleExpanded}
            panelNumber='panel5'
            productType='ssd'
         >
            <SSDLink setSideBarOpen={setSideBarOpen} />
         </BaseAccordionPanel>
      </AccordionContainer>
   )
}
// https://codepen.io/raubaca/pen/PZzpVe?editors=1100
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
// https://reactjsexample.com/tag/accordion/

export default Routes
