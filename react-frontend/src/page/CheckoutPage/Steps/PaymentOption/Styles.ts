import styled from 'styled-components'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const StyledCardForm = styled.section`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   @media only screen and (max-width: ${mobileWindowSize}) {
   }
`

export const StyledCardContainer = styled.div`
   height: 30%;
   display: flex;
   flex-direction: column;
   @media only screen and (max-width: ${mobileWindowSize}) {
      height: 50%;
   }
`

export const ButtonAndAlertSection = styled.div`
   height: 40%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const styleObject = (isDarkTheme: boolean) => {
   return {
      style: {
         base: {
            padding: '3',
            iconColor: isDarkTheme ? '#FFF' : '#000',
            color: isDarkTheme ? '#FFF' : '#111',
            fontWeight: 500,
            fontSize: '20px',
            ':-webkit-autofill': { color: isDarkTheme ? '#EEE' : '#333' },
            '::placeholder': { color: isDarkTheme ? '#EEE' : '#333' },
         },
         invalid: {
            iconColor: '#d3401c',
            color: '#d3401c',
         },
      },
   }
}
