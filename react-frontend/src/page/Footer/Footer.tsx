import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   FooterContainer,
   IconContainer,
   ReactIconAnchor,
   NodeIconAnchor,
   GitHubIconAnchor,
   LinkedInIconAnchor
} from './FooterStyle'

const Footer = () => {
   return (
      <FooterContainer>
         <p>Készítette: &copy; Nagy Tamás. 2021 Budapest</p>
         <IconContainer>
            <ReactIconAnchor href='https://reactjs.org/' target='_blank'>
               <FontAwesomeIcon icon={['fab', 'react']} size='2x' />
            </ReactIconAnchor>
            <NodeIconAnchor href='https://nodejs.org/en/' target='_blank'>
               <FontAwesomeIcon icon={['fab', 'node']} size='2x' />
            </NodeIconAnchor>
            <GitHubIconAnchor href='https://github.com/nagytommy76/ComputerStoreMERN' target='_blank'>
               <FontAwesomeIcon icon={['fab', 'github']} size='2x' />
            </GitHubIconAnchor>
            <LinkedInIconAnchor href='https://www.linkedin.com/in/tam%C3%A1s-nagy-27355116b/' target='_blank'>
               <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
            </LinkedInIconAnchor>
         </IconContainer>
      </FooterContainer>
   )
}

export default Footer
