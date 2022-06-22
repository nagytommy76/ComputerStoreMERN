import React from 'react'
import { WelcomeContainer, StyledWelcomeImg, WelcomeMaintitleContainer, StyledHeading } from './Styles'
import WelcomeImg from './Images/Welcome2.jpg'

const Welcome = () => {
   return (
      <WelcomeContainer>
         <StyledWelcomeImg backgroundimage={WelcomeImg}>
            <WelcomeMaintitleContainer>
               <StyledHeading variant='h2'>Üdvözlünk a ComputerStore webáruház honlapján</StyledHeading>
            </WelcomeMaintitleContainer>
         </StyledWelcomeImg>
         <h1>Kiemelt termékek helye</h1>
      </WelcomeContainer>
   )
}

export default Welcome
