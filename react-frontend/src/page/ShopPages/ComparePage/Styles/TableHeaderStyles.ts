import { styled } from '@mui/material'
import Link from '@mui/material/Link'

export const StyledHeaderBox = styled('div')({
   height: 180,
   position: 'relative',
   paddingTop: 15,

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
})

export const StyledLink = styled(Link)({
   display: 'flex',
   alignItems: 'center',
})

export const StyledSpan = styled('span')({
   display: 'flex',
   flexDirection: 'column',
})

export const StyledImage = styled('img')({
   objectFit: 'contain',
   marginRight: 1,
   width: 170,
   height: 110,
})
