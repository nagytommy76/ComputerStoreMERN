import React, { useState } from 'react'
import axios from 'axios'

import LoadingButton from '@mui/lab/LoadingButton'
import EmailIcon from '@mui/icons-material/Email'

const ResendEmailButton: React.FC<{ confirmCode: string; userEmail?: string }> = ({ confirmCode, userEmail }) => {
   const [isPending, setIsPending] = useState<boolean>(false)
   const handleResendEmail = async () => {
      setIsPending(true)
      try {
         const emailResendResponse = await axios.post('/auth/resend-email', { confirmCode })
         console.log(emailResendResponse)
         setIsPending(false)
      } catch (error) {
         if (axios.isAxiosError(error)) {
            console.log(error)
            setIsPending(false)
         }
      }
   }

   return (
      <LoadingButton
         loading={isPending}
         onClick={handleResendEmail}
         sx={{ marginTop: '.6rem' }}
         endIcon={<EmailIcon />}
         variant='outlined'
         color='info'>
         Email újraküldése
      </LoadingButton>
   )
}

export default ResendEmailButton
