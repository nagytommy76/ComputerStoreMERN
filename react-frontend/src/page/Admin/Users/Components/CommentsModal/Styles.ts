import { styled } from '@mui/material'

export const StyledBox = styled('section')(({ theme }) => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',

   padding: '1rem',
   width: 800,
   minHeight: 600,
   borderRadius: '4px',

   boxShadow: '2px 0px 20px rgba(0, 0,0, 0.2)',
   backgroundColor: theme.palette.primary.dark,
   color: theme.palette.mode === 'dark' ? '#fff' : '#000',
}))
