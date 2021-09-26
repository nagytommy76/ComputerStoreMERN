import { Button, Card, styled as MUIStyled } from '@mui/material'
import styled from 'styled-components'

export const RatingContainer = styled.div`
   border-radius: 5px;
   margin-bottom: 1.5rem;
`

export const LeftContent = styled.section`
   width: 50%;
   padding: 0.9rem;
`

export const RightContent = styled.section`
   width: 50%;
   padding: 0.9rem;
`

export const StyledButton = MUIStyled(Button)`
   margin: 1rem 0 1rem 0;
`

export const CustomCardContent = MUIStyled(Card)`
   display: flex;
   flex-direction: row;
`
