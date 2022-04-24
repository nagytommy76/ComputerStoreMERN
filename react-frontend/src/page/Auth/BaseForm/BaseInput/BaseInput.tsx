import React, { ChangeEvent, ReactNode } from 'react'
import { StyledFormControl, StyledLabel, StyledInput, ErrorSpanStyle } from './InputStyle'

type Props = {
   type?: string
   placeHolder: string
   labelText: string
   value: string | number | undefined
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
   pattern?: string
   min?: string | number
   max?: string | number
   children: ReactNode
}

const BaseInput: React.FC<Props> = ({
   type = 'text',
   placeHolder,
   labelText,
   value,
   onChangeEvent,
   pattern,
   min,
   max,
   children,
}) => {
   return (
      <StyledFormControl>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <StyledInput
            min={min}
            max={max}
            pattern={pattern}
            type={type}
            placeholder={placeHolder}
            value={value}
            onChange={onChangeEvent}
         />
         <ErrorSpanStyle>{children}</ErrorSpanStyle>
      </StyledFormControl>
   )
}

export default BaseInput
