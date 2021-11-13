import styled from 'styled-components'
import { styled as MUIStyled } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { ThumbUp, ThumbDown } from '@mui/icons-material'
import { mobileWindowSize } from '../../../../../../Theme/GlobalStyles'

export const CommentCard = MUIStyled(CardContent)(() => ({
   padding: '1.5rem',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column'
   }
}))

export const LeftSide = styled.div`
   flex: 1;
`

export const RightSide = styled.div`
   flex: 2;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   @media (max-width: ${mobileWindowSize}) {
      margin-top: 1.5rem;
      text-align: justify;
   }
`

// Thumbs

export const ThumbsContainer = styled.div<{ usersComment: boolean }>`
   display: flex;
   align-items: center;
   width: ${({ usersComment }) => (usersComment ? '220px' : '100px')};
   justify-content: space-between;
   margin-top: 1rem;
   @media (max-width: ${mobileWindowSize}) {
      margin-top: 1.5rem;
   }
`

export const ThumbIconsContainer = styled.span`
   display: flex;
   align-items: center;
`

export const CustomThumbUp = MUIStyled(ThumbUp)`
    margin-right: .4rem;
    cursor: pointer;
`
export const CustomThumbDown = MUIStyled(ThumbDown)`
    margin-right: .4rem;
    cursor: pointer;
`
