import React from 'react'
import { InputContainer } from '../InputStyle'
import { StyledCheckBox, LabelSyle, TickMark } from './CheckStyle'

const CheckBox: React.FC<Props> = ({ labelText, onChangeEvent, checked }) => {
   return (
      <InputContainer>
         <StyledCheckBox id='chk' type='checkbox' onChange={onChangeEvent} checked={checked} />
         <LabelSyle htmlFor='chk'>
            <TickMark />
         </LabelSyle>
      </InputContainer>
   )
}

type Props = {
   labelText: string
   onChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void
   checked: boolean
}

export default CheckBox
