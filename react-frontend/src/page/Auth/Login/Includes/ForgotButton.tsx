import React from 'react'
import { InputTypes } from '../../DefaultProperties'

import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'

const ForgotButton: React.FC<{
   emailOrUsername: InputTypes
   setInvalidPassAttempt: React.Dispatch<React.SetStateAction<number>>
}> = ({ emailOrUsername, setInvalidPassAttempt }) => {
   const handleForgotPasswordButton = () => {
      setInvalidPassAttempt(prevAttempt => (prevAttempt = 2))
   }

   return (
      <Fade in={emailOrUsername.value.length >= 3}>
         <div style={{ width: '100%' }}>
            <Button onClick={handleForgotPasswordButton} size='small' variant='text'>
               elfelejtett jelszó?
            </Button>
         </div>
      </Fade>
   )
}

export default ForgotButton
