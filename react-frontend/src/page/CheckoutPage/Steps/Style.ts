import styled from 'styled-components'
import Paper from '@mui/material/Paper'

export const StepsContainer = styled.section`
   min-height: 50vh;
`

export const StyledFormControl = styled('div')({
   width: '100%',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'
})

export const StyledPaper = styled(Paper)({
   margin: '.6rem 0',
   padding: '.4rem 1rem'
})
