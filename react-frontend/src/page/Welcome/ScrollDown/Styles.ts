import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

export const ScrollContainer = styled('div')({
   height: '90px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'space-around',
})

export const ScrolldownButton = styled('a')({
   color: 'white',
   position: 'relative',
   width: '50px',
   height: '50px',
   transform: 'rotate(45deg)',

   [`@media(max-width: ${mobileWindowSize})`]: {
      height: '35px',
      width: '35px',
   },
})

export const DownArrowStyle = styled('span')({
   position: 'absolute',
   left: '0',
   top: '0',
   width: '100%',
   height: '100%',
   boxSizing: 'border-box',
   border: 'none',
   borderBottom: '3px solid #fff',
   borderRight: '3px solid #fff',
   animation: 'animate 1s linear infinite',
   ':nth-of-type(1)': {
      top: '-30px',
      left: '-30px',
      animationDelay: '0s',
   },

   ':nth-of-type(2)': {
      top: '-15px',
      left: '-15px',
      animationDelay: '0.2s',
   },
   ':nth-of-type(3)': {
      top: '0',
      left: '0',
      animationDelay: '0.4s',
   },
   ':nth-of-type(4)': {
      top: '15px',
      left: '15px',
      animationDelay: '0.6s',
   },
   ':nth-of-type(5)': {
      top: '30px',
      left: '30px',
      animationDelay: '0.8s',
   },

   ['@keyframes animate']: {
      '0%': {
         borderColor: '#fff',
         transform: 'translate(0,0)',
      },
      '20%': {
         borderColor: '#fff',
         transform: 'translate(15px,15px)',
      },
      '20.1%,100%': {
         borderColor: '#ff8f00',
      },
   },
})
