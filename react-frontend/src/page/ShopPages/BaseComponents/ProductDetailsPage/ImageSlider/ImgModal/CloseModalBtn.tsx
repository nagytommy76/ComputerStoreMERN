import React from 'react'
import { StyledIconBtn } from './Styles'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const CloseModalBtn: React.FC<{ handleCloseModal: () => void }> = ({ handleCloseModal }) => {
   return (
      <StyledIconBtn onClick={handleCloseModal} size='large'>
         <HighlightOffIcon fontSize='inherit' />
      </StyledIconBtn>
   )
}

export default CloseModalBtn
