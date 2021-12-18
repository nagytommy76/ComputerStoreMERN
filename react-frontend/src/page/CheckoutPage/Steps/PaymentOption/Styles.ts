import styled from 'styled-components'

export const StyledCardForm = styled.section`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`

export const StyledCardContainer = styled.div`
   height: 20%;
   padding: 1rem 0;
   display: flex;
   flex-direction: column;
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
            ':-webkit-autofill': { color: isDarkTheme ? '#DDD' : '#111' },
            '::placeholder': { color: isDarkTheme ? '#DDD' : '#111' }
         },
         invalid: {
            iconColor: '#d3401c',
            color: '#d3401c'
         }
      }
   }
}
