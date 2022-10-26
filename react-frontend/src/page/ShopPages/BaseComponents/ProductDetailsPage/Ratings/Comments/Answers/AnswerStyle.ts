import { styled } from '@mui/material'

export const AnswerContainer = styled('section')`
   width: 100%;
   min-height: 100px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const ButtonAlertContainer = styled('section')`
   width: 100%;
   height: 50px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

export const SingleAnswerStyle = styled('section')`
   display: flex;
   flex-direction: row;
   margin: 2rem 0 1rem 0;
`

export const LeftAnswerStyle = styled('section')`
   flex: 1;
   display: flex;
   flex-direction: column;
`

export const RightAnswerStyle = styled('section')`
   flex: 2;
`

export const StyledChildAnswers = styled('section')(({ theme }) => ({
   paddingLeft: '3rem',
   borderLeft: `2px solid ${theme.palette.primary.main}`,
}))
