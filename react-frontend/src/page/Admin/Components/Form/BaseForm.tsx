import React from 'react'
import { StyledForm, FormCard } from '../../Components/Form/FormStyle'
import handleInsertSubmit from '../../Helper/HandleInsertSubmit'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import Grow from '@mui/material/Grow'
import { ValidationError } from '../../AdminTypes'

const SubmitButton = React.lazy(() => import('../../Components/InputFields/SubmitButton/SubmitButton'))

const BaseForm: React.FC<{
   // productType?: string
   // product?: any
   // setProduct
   // setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>

   handleSubmit: (event: React.FormEvent) => void
   mainTitle: string
   submitButtonText: string
   inputWasSuccess?: boolean
}> = ({ handleSubmit, children, mainTitle, submitButtonText, inputWasSuccess = false }) => {
   // const handleProductSubmit = (event: React.FormEvent) => {
   //    event.preventDefault()
   //    handleInsertSubmit(productType, product, pictureUrls, setValidationErrors, setCpuProducts, setInputSuccess, cpuProperties)
   // }

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
            <Grow in={inputWasSuccess}>
               <Alert severity='success' onClose={() => {}}>
                  Sikeres bevitel!
               </Alert>
            </Grow>
         </CardContent>
      </FormCard>
   )
}

export default BaseForm
