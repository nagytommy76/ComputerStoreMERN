import React, { useEffect } from 'react'
import { axiosInstance } from '../../AxiosSetup/AxiosInstance'
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
   const getHighlights = async () => {
      const response = await axiosInstance.get('/highlight/get-highlight')
      console.log(response.data)
   }
   useEffect(() => {
      getHighlights()
   }, [])
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
