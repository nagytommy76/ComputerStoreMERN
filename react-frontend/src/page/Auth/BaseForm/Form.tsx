import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { StyledForm, FormConrolStyle, FormTitle } from './FormStyle'
import { Button } from '@mui/material'

type Props = {
   title: string
   buttonText: string
   onSubmitEvent: (event: React.FormEvent) => void
}

const AlertSection = React.lazy(() => import('./AlertSection'))

const Form: React.FC<Props> = ({ title, onSubmitEvent, buttonText, children }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <StyledForm isDark={isDarkTheme} onSubmit={onSubmitEvent}>
         <FormTitle>{title}</FormTitle>
         <FormConrolStyle>
            {children}
            <Button type='submit' sx={{ margin: '1.5rem 0' }} variant='contained' color='primary' size='large'>
               {buttonText}
            </Button>
            <AlertSection />
         </FormConrolStyle>
      </StyledForm>
   )
}

export default Form
