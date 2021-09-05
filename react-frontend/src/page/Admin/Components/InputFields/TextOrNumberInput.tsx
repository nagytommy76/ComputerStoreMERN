import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { InputContainer, InputFieldStyle, StyledLabel, StyledErrorMessage } from './InputStyle'
import { CSSTransition } from 'react-transition-group'
import styles from './error.module.css'

const TextOrNumberInput: React.FC<Props> = ({
   labelText,
   inputType = 'text',
   onChangeEvent,
   value,
   errorMsg = '',
   placeHolder,
   min,
   max,
   isZipCode = false
}) => {
   const errorTextRef = useRef(null)
   const [hasErrorNotExpired, setHasErrorNotExpired] = useState<boolean>(false)
   useEffect(() => {
      setHasErrorNotExpired(errorMsg.length > 0)
      if (typeof value === 'string' && value.length > 2) setHasErrorNotExpired(false)
      if (typeof value === 'number') {
         if (value > 0 && !isZipCode) setHasErrorNotExpired(false)
         if (isZipCode && value >= 1000 && value <= 9999) setHasErrorNotExpired(false)
      }
   }, [errorMsg, value, isZipCode])

   return (
      <InputContainer>
         <StyledLabel htmlFor={labelText}>{labelText}</StyledLabel>
         <InputFieldStyle
            min={min}
            max={max}
            id={labelText}
            type={inputType}
            onChange={onChangeEvent}
            value={value}
            isError={hasErrorNotExpired}
            placeholder={placeHolder}
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
   placeHolder?: string
   min?: number | string
   max?: number | string
   isZipCode?: boolean
}

export default TextOrNumberInput
