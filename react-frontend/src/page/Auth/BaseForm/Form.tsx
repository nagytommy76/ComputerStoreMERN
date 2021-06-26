import React from 'react'
import { StyledForm, FormConrolStyle, FormTitle } from './FormStyle'

const Button = React.lazy(() => import('../../BaseElements/Button/Button'))

type Props = {
   title: string
   buttonText: string
   onSubmitEvent: (event: React.FormEvent) => void
}

const Form: React.FC<Props> = ({ title, onSubmitEvent, buttonText, children }) => {
   return (
      <StyledForm onSubmit={onSubmitEvent}>
         <FormTitle>{title}</FormTitle>
         <FormConrolStyle>
            {children}
            <Button>{buttonText}</Button>
         </FormConrolStyle>
      </StyledForm>
   )
}

export default Form
