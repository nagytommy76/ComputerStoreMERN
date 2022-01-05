import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { StyledForm, FormConrolStyle, FormTitle } from './FormStyle'

import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'

type Props = {
   title: string
   buttonText: string
   onSubmitEvent: (event: React.FormEvent) => void
   isLoadingButton: boolean
}

const AlertSection = React.lazy(() => import('./AlertSection'))

const Form: React.FC<Props> = ({ title, onSubmitEvent, buttonText, children, isLoadingButton }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <StyledForm isDark={isDarkTheme} onSubmit={onSubmitEvent}>
         <FormTitle>{title}</FormTitle>
         <FormConrolStyle>
            {children}
            <LoadingButton
               id='loginButton'
               title={buttonText}
               endIcon={<SendIcon />}
               loadingPosition='end'
               loading={isLoadingButton}
               type='submit'
               sx={{ margin: '1.5rem 0' }}
               variant='contained'
               color='primary'
               size='large'>
               {buttonText}
            </LoadingButton>
            <AlertSection />
         </FormConrolStyle>
      </StyledForm>
   )
}

export default Form
