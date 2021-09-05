import React from 'react'
import { FormSubmitButton, FormSubmitButtonContainer } from './ButtonStyle'

const AdvancedButton: React.FC<{
   children: string
   onClickEvent: React.MouseEventHandler<HTMLSpanElement>
   isButtonDisabled?: boolean
}> = ({ children, onClickEvent, isButtonDisabled = false }) => {
   const clickEventHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
      if (!isButtonDisabled) {
         onClickEvent(event)
      }
   }
   return (
      <FormSubmitButtonContainer onClick={clickEventHandler}>
         <FormSubmitButton buttonText={children} />
      </FormSubmitButtonContainer>
   )
}

export default AdvancedButton
