import { styled } from '@mui/material'

interface StyledSliderProps {
   isActive?: boolean
}

export const StyledImage = styled('img', {
   shouldForwardProp: prop => prop !== 'isActive',
})<StyledSliderProps>(({ isActive, theme }) => ({
   border: `solid none 5px`,
   cursor: 'pointer',
   width: '110px',
   margin: '0 .5rem',
   ...(isActive && {
      width: '100px',
      border: `solid ${theme.palette.primary.main} 5px`,
   }),
}))

export const StyledContainer = styled('div')({
   marginBottom: '1rem',
})
