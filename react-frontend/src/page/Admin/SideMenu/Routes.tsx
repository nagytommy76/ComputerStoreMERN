import React from 'react'
import { Link } from 'react-router-dom'
import { AccordionContainer, AccordionTab, Input, TabLabel, AccordionContent } from './RoutesStyles'

const Routes = () => {
   /*const [clicked, setClicked] = useState(false)*/
   const toggleClicked = (key: string) => {}
   return (
      <AccordionContainer>
         <AccordionTab>
            <Input type='checkbox' id='chck1' />
            <TabLabel key='vga' onClick={() => toggleClicked('vga')} htmlFor='chck1'>
               Vga
            </TabLabel>
            <AccordionContent>
               <Link to='/admin/vga-insert'>Vga bevitele</Link>
            </AccordionContent>
            <AccordionContent>
               <Link to='/admin/vga-modify'>Vga módosítása</Link>
            </AccordionContent>
         </AccordionTab>
         <AccordionTab>
            <Input type='checkbox' id='chck2' />
            <TabLabel key='vga' onClick={() => toggleClicked('vga')} htmlFor='chck1'>
               Cpu
            </TabLabel>
            <Link to='/admin/cpu-insert'>CPU bevitele</Link>
         </AccordionTab>
      </AccordionContainer>
   )
}
// https://codepen.io/raubaca/pen/PZzpVe?editors=1100
// https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
// https://reactjsexample.com/tag/accordion/

export default Routes
