import React from 'react'

import { DownArrowStyle, ScrolldownButton, ScrollContainer } from './Styles'

const ScrollDown = () => {
   return (
      <ScrollContainer>
         <ScrolldownButton href='#highlights'>
            <DownArrowStyle />
            <DownArrowStyle />
            <DownArrowStyle />
            <DownArrowStyle />
            <DownArrowStyle />
         </ScrolldownButton>
      </ScrollContainer>
   )
}

export default ScrollDown
