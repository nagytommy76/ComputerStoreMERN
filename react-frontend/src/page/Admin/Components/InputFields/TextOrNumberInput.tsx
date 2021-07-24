import React, { ChangeEvent } from 'react'
import { InputContainer, InputFieldStyle, StyledLabel } from './InputStyle'

const TextOrNumberInput: React.FC<Props> = ({ labelText, inputType = 'text', onChangeEvent, value }) => {
   return (
      <InputContainer>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <InputFieldStyle id={labelText} type={inputType} onChange={onChangeEvent} value={value} />
      </InputContainer>
   )
}

type Props = {
   labelText: string
   inputType?: string
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
   value: string | number
}

export default TextOrNumberInput
