import React from 'react'

import Tooltip from '@mui/material/Tooltip'

import { DownArrowStyle, ScrolldownButton, ScrollContainer } from './Styles'

const ScrollDown = () => {
   return (
      <Tooltip title='Fedezd fel kiemelt kínálatunkat' arrow placement='top'>
         <ScrollContainer>
            <ScrolldownButton href='#highlights'>
               <DownArrowStyle />
               <DownArrowStyle />
               <DownArrowStyle />
               <DownArrowStyle />
               <DownArrowStyle />
            </ScrolldownButton>
         </ScrollContainer>
      </Tooltip>
   )
}

export default ScrollDown
