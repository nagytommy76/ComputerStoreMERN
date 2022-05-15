import React, { useState } from 'react'
import { axiosInstance as axios, isAxiosError } from '../../../AxiosSetup/AxiosInstance'

import LoadingButton from '@mui/lab/LoadingButton'
import EmailIcon from '@mui/icons-material/Email'

const ResendEmailButton: React.FC<{
   path?: string
   confirmCode: string | null
   userEmail?: string | null
   onSnackbarOpen?: React.Dispatch<React.SetStateAction<{ open: boolean; message: string }>>
}> = ({ path = 'resend-email', confirmCode, userEmail = null, onSnackbarOpen = () => {} }) => {
   const [isPending, setIsPending] = useState<boolean>(false)
   const handleResendEmail = async () => {
      setIsPending(true)
      try {
         const emailResendResponse = await axios.post(`/auth/${path}`, {
            confirmCode,
            userEmailOrUsername: userEmail,
         })
         if (emailResendResponse.status === 200)
            onSnackbarOpen({ open: true, message: emailResendResponse.data.message })
         setIsPending(false)
      } catch (error) {
         if (isAxiosError(error)) {
            console.log(error)
            setIsPending(false)
         }
      }
   }

   return (
      <LoadingButton
         sx={{ marginTop: 1 }}
         loading={isPending}
         onClick={handleResendEmail}
         endIcon={<EmailIcon />}
         variant='outlined'
         color='info'
      >
         Email küldése
      </LoadingButton>
   )
}

export default ResendEmailButton
