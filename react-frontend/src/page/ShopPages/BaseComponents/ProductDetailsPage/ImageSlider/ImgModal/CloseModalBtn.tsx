import React from 'react'
import { StyledIconBtn } from './Styles'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const CloseModalBtn = () => {
   return (
      <StyledIconBtn size='large'>
         <HighlightOffIcon fontSize='large' />
      </StyledIconBtn>
   )
}

export default CloseModalBtn
