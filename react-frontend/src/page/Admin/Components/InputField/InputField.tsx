import React, { ChangeEvent } from 'react'
import styled from 'styled-components'

const InputField: React.FC<Props> = ({ labelText, inputType = 'text', onChangeEvent, value }) => {
   return (
      <InputFieldStyle>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <input id={labelText} type={inputType} onChange={onChangeEvent} value={value} />
      </InputFieldStyle>
   )
}

const InputFieldStyle = styled.div`
   display: flex;
   flex-direction: column;
`

const StyledLabel = styled.label`
   margin: 0.5rem 0;
   font-size: 1.1rem;
`

type Props = {
   labelText: string
   inputType?: string
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
   value: string | number
}

export default InputField
