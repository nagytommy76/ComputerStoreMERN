import React from 'react'
import { useAppSelector } from '../../../../../../../app/hooks'

import Button from '@mui/material/Button'

const OpenAnswerTextField: React.FC<{
   setIsAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
   commentUserId: string
}> = ({ setIsAnswerOpen, commentUserId }) => {
   const { userLoggedIn, userId } = useAppSelector(state => state.auth)
   const isUsersComment = () => userLoggedIn && commentUserId !== userId
   const handleAnswerOpen = () => setIsAnswerOpen(prevValue => !prevValue)

   return (
      <>
         {isUsersComment() && (
            <Button onClick={handleAnswerOpen} color='success' variant='outlined'>
               Válasz
            </Button>
         )}
      </>
   )
}

export default OpenAnswerTextField
