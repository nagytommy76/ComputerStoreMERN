import React from 'react'
import { StyledForm, FormCard } from '../../Components/Form/FormStyle'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const SubmitButton = React.lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const BaseForm: React.FC<{ handleSubmit: (event: React.FormEvent) => void; mainTitle: string; submitButtonText: string }> = ({
   handleSubmit,
   children,
   mainTitle,
   submitButtonText
}) => {
   return (
      <FormCard>
         <CardHeader
            title={
               <Typography align='center' variant='h4'>
                  {mainTitle}
               </Typography>
            }
         />
         <CardContent>
            <StyledForm onSubmit={handleSubmit}>
               {children}
               <SubmitButton>{submitButtonText}</SubmitButton>
            </StyledForm>
         </CardContent>
      </FormCard>
   )
}

export default BaseForm
