import React from 'react'
import { FormSubmitButton, FormSubmitButtonContainer } from './ButtonStyle'

const AdvancedButton: React.FC<{ children: string; onClickEvent: React.MouseEventHandler<HTMLSpanElement> }> = ({
   children,
   onClickEvent
}) => {
   return (
      <FormSubmitButtonContainer onClick={onClickEvent}>
         <FormSubmitButton buttonText={children} />
      </FormSubmitButtonContainer>
   )
}

export default AdvancedButton
