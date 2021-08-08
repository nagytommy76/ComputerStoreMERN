import React, { ChangeEvent } from 'react'
import { InputContainer, InputFieldStyle, StyledLabel, StyledErrorMessage } from './InputStyle'

const TextOrNumberInput: React.FC<Props> = ({ labelText, inputType = 'text', onChangeEvent, value, errorMsg }) => {
   return (
      <InputContainer>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <InputFieldStyle id={labelText} type={inputType} onChange={onChangeEvent} value={value} />
         {errorMsg && <StyledErrorMessage>{errorMsg}</StyledErrorMessage>}
      </InputContainer>
   )
}

type Props = {
   labelText: string
   inputType?: string
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
   value: string | number | undefined
   errorMsg?: string
}

export default TextOrNumberInput
