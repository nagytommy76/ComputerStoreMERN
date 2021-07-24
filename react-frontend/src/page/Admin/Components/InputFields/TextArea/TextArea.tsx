import React, { ChangeEvent } from 'react'
import { InputContainer, StyledLabel, TextAreaStyle } from '../InputStyle'

const TextArea: React.FC<Props> = ({ labelText, value, onChangeEvent }) => {
   return (
      <InputContainer>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <TextAreaStyle rows={3} id={labelText} value={value} onChange={onChangeEvent} />
      </InputContainer>
   )
}

type Props = {
   labelText: string
   value: string | undefined
   onChangeEvent: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export default TextArea
