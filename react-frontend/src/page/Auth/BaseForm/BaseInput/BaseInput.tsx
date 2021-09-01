import React, { ChangeEvent } from 'react'
import { StyledFormControl, StyledLabel, StyledInput, ErrorSpanStyle } from './InputStyle'

type Props = {
   type?: string
   placeHolder: string
   labelText: string
   value: string | number | undefined
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
}

const BaseInput: React.FC<Props> = ({ type = 'text', placeHolder, labelText, value, onChangeEvent, children }) => {
   return (
      <StyledFormControl>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <StyledInput type={type} placeholder={placeHolder} value={value} onChange={onChangeEvent} />
         <ErrorSpanStyle>{children}</ErrorSpanStyle>
      </StyledFormControl>
   )
}

export default BaseInput
