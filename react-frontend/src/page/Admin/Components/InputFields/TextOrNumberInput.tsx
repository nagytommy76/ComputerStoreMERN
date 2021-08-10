import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { InputContainer, InputFieldStyle, StyledLabel, StyledErrorMessage } from './InputStyle'
import { CSSTransition } from 'react-transition-group'
import styles from './error.module.css'

const TextOrNumberInput: React.FC<Props> = ({ labelText, inputType = 'text', onChangeEvent, value, errorMsg = '' }) => {
   const errorTextRef = useRef(null)
   const [hasErrorNotExpired, setHasErrorNotExpired] = useState<boolean>(false)
   useEffect(() => {
      setHasErrorNotExpired(errorMsg.length > 0)
      if (typeof value === 'string' && value.length > 0) setHasErrorNotExpired(false)
      if (typeof value === 'number' && value > 0) setHasErrorNotExpired(false)
   }, [errorMsg, value])

   return (
      <InputContainer>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <InputFieldStyle
            min='0'
            id={labelText}
            type={inputType}
            onChange={onChangeEvent}
            value={value}
            isError={hasErrorNotExpired}
         />
         <CSSTransition
            in={hasErrorNotExpired}
            unmountOnExit
            mountOnEnter
            timeout={300}
            nodeRef={errorTextRef}
            classNames={{
               enter: styles.ErrorEnter,
               enterActive: styles.ErrorEnterActive,
               exit: styles.ErrorExit,
               exitActive: styles.ErrorExitActive
            }}>
            <StyledErrorMessage ref={errorTextRef} role='status'>
               {errorMsg}
            </StyledErrorMessage>
         </CSSTransition>
      </InputContainer>
   )
}

type Props = {
   labelText: string
   inputType?: string
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
   value: string | number | undefined
   errorMsg?: string | undefined
}

export default TextOrNumberInput
