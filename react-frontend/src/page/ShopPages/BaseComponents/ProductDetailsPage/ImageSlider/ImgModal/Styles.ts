import { styled } from '@mui/material'
import IconButton from '@mui/material/IconButton'

export const StyledModal = styled('div')({
   outline: 'none',
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '100%',
   height: '65%',
   backgroundColor: '#FFF',
})

export const StyledImage = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'contain',
})

export const StyledIconBtn = styled(IconButton)({
   position: 'absolute',
   right: '25px',
   top: '25px',
   color: 'red',
})
