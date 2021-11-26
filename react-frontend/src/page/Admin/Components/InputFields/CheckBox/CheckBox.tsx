import React from 'react'
import { StyledCheckBoxContainer } from './CheckStyle'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

const CheckBox: React.FC<Props> = ({ labelText, onChangeEvent, checked }) => {
   return (
      <StyledCheckBoxContainer>
         <FormControlLabel
            label={labelText}
            control={<Checkbox onChange={onChangeEvent} checked={checked} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
         />
      </StyledCheckBoxContainer>
   )
}

type Props = {
   labelText: string
   onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
   checked: boolean
}

export default CheckBox
