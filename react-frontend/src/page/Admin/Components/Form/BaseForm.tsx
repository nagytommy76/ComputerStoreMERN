import React from 'react'
import { FormCard } from '../../Components/Form/FormStyle'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import Grow from '@mui/material/Grow'

const BaseForm: React.FC<{
   mainTitle: string
   inputSuccess: boolean
   setInputSuccess: React.Dispatch<React.SetStateAction<boolean>>
   alertTextAndServerity?: { serverity: 'error' | 'success' | 'warning' | 'info'; text: string }
}> = ({
   children,
   mainTitle,
   inputSuccess,
   setInputSuccess,
   alertTextAndServerity: alertTextAnsServerity = { serverity: 'success', text: 'Sikeres bevitel!' }
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
            {children}
            <Grow in={inputSuccess}>
               <Alert severity={alertTextAnsServerity.serverity} onClose={() => setInputSuccess(false)}>
                  {alertTextAnsServerity.text}
               </Alert>
            </Grow>
         </CardContent>
      </FormCard>
   )
}

export default BaseForm
