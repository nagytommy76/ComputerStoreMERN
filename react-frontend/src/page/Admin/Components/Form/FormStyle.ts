import styled from 'styled-components'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

import Card from '@mui/material/Card'

export const StyledForm = styled.form`
   width: 95%;
   text-align: center;
   margin: 1rem auto 3rem auto;
`

export const FormContainerStyle = styled.section`
   display: grid;
   /* 100% szélességből 2rem (row/column-gap) osztva az oszloppal (3) */
   grid-template-columns: repeat(3, calc((100% - 2rem) / 3));
   justify-content: center;
   row-gap: 1rem;
   column-gap: 1rem;
   @media (max-width: ${mobileWindowSize}) {
      grid-template-columns: 100%;
   }
`

export const FormCard = styled(Card)(({ theme }) => ({
   width: '100%'
}))
