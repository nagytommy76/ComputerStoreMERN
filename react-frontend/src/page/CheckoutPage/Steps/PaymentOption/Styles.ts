import styled from 'styled-components'

export const StyledCardForm = styled.form`
   width: 100%;
   height: 100%;
`

export const StyledCardContainer = styled.div`
   padding: 1rem 0;
   display: flex;
   flex-direction: column;
`

export const styleObject = (isDarkTheme: boolean) => {
   return {
      style: {
         base: {
            padding: '3',
            iconColor: '#c4f0ff',
            color: isDarkTheme ? '#FFF' : '#111',
            fontWeight: 500,
            fontSize: '20px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: '#fce883' },
            '::placeholder': { color: '#87bbfd' }
         },
         invalid: {
            iconColor: '#d3401c',
            color: '#d3401c'
         }
      }
   }
}
