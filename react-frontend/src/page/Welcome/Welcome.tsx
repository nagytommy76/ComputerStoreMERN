import React from 'react'
import {
   WelcomeContainer,
   StyledWelcomeImg,
   WelcomeMaintitleContainer,
   StyledHeading,
   HighlightLetterStyle,
} from './Styles'
import WelcomeImg from './Images/Welcome2.jpg'

const ScrollDown = React.lazy(() => import('./ScrollDown/ScrollDown'))
const HighlightSection = React.lazy(() => import('./Highlight/HighlightSection'))

const Welcome = () => {
   return (
      <>
         <WelcomeContainer>
            <StyledWelcomeImg backgroundimage={WelcomeImg}>
               <WelcomeMaintitleContainer>
                  <StyledHeading variant='h2'>
                     <HighlightLetterStyle>C</HighlightLetterStyle>omputer
                     <HighlightLetterStyle>S</HighlightLetterStyle>tore webáruház
                  </StyledHeading>
                  <ScrollDown />
               </WelcomeMaintitleContainer>
            </StyledWelcomeImg>
         </WelcomeContainer>
         <HighlightSection />
      </>
   )
}

export default Welcome
