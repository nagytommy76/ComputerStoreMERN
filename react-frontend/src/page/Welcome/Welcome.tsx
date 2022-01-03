import React from 'react'
import { WelcomeContainer, StyledWelcomeImg, WelcomeMaintitleContainer } from './Styles'
import WelcomeImg from './Images/Welcome.jpg'

import Typography from '@mui/material/Typography'

const Welcome = () => {
   return (
      <WelcomeContainer>
         <StyledWelcomeImg backgroundimage={WelcomeImg}>
            <WelcomeMaintitleContainer>
               <Typography sx={{ color: '#FFF' }} fontSize={45} variant='h2'>
                  Üdvözlünk a ComputerStore webáruház honlapján
               </Typography>
            </WelcomeMaintitleContainer>
         </StyledWelcomeImg>
      </WelcomeContainer>
   )
}

export default Welcome
