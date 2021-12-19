import { styled } from '@mui/material'

import Card from '@mui/material/Card'

export const SummaryContainer = styled('section')(() => ({
   width: '100%',
   height: '75%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'space-between'
}))

export const CardContainer = styled('section')(() => ({
   margin: '1.4rem 0',
   width: '85%',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between'
}))

export const StyledCard = styled(Card)(() => ({
   width: '300px'
}))
