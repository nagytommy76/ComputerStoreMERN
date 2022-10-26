import styled from 'styled-components'
import { styled as MUIStyled } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { ThumbUp, ThumbDown } from '@mui/icons-material'
import { mobileWindowSize } from '../../../../../../Theme/GlobalStyles'

export const CommentCard = MUIStyled(CardContent)({
   padding: '1rem 1rem 0 1rem',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column',
   },
})

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
   flex-direction: row;
   align-items: center;

   width: '150px';
   @media (max-width: ${mobileWindowSize}) {
      margin-top: 1.5rem;
   }
`

export const ThumbIconsContainer = styled.span`
   display: flex;
   align-items: center;
   margin-right: 0.75rem;
`

export const CustomThumbUp = MUIStyled(ThumbUp)`
    margin-right: .4rem;
    cursor: pointer;
`
export const CustomThumbDown = MUIStyled(ThumbDown)`
    margin-right: .4rem;
    cursor: pointer;
`

export const LikeAndReplyContainer = MUIStyled('section')({
   display: 'flex',
})
