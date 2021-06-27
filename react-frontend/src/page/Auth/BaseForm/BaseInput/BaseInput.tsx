import React, { ChangeEvent } from 'react'
import { StyledFormControll, StyledLabel, StyledInput, ErrorSpanStyle } from './InputStyle'

type Props = {
   type?: string
   placeHolder: string
   labelText: string
   value: string
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
}

const BaseInput: React.FC<Props> = ({ type = 'text', placeHolder, labelText, value, onChangeEvent, children }) => {
   return (
      <StyledFormControll>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <StyledInput type={type} placeholder={placeHolder} value={value} onChange={onChangeEvent} />
         <ErrorSpanStyle>{children}</ErrorSpanStyle>
      </StyledFormControll>
   )
}

export default BaseInput
