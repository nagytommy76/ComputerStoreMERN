import React, { ChangeEvent } from 'react'
import { StyledFormControll, StyledLabel, StyledInput } from './InputStyle'

type Props = {
   type?: string
   placeHolder: string
   labelText: string
   value: string
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
}

const BaseInput: React.FC<Props> = ({ type = 'text', placeHolder, labelText, value, onChangeEvent }) => {
   return (
      <StyledFormControll>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <StyledInput type={type} placeholder={placeHolder} value={value} onChange={onChangeEvent} />
      </StyledFormControll>
   )
}

export default BaseInput
