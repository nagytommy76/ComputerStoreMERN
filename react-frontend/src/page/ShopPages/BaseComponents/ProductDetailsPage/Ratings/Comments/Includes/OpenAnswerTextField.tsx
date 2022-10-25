import React from 'react'
import { useAppSelector } from '../../../../../../../app/hooks'

import IconButton from '@mui/material/IconButton'
import ReplyIcon from '@mui/icons-material/Reply'
import Tooltip from '@mui/material/Tooltip'

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
            <Tooltip arrow title='Válasz küldése' placement='top'>
               <IconButton onClick={handleAnswerOpen} aria-label='answer' color='success'>
                  <ReplyIcon />
               </IconButton>
            </Tooltip>
         )}
      </>
   )
}

export default OpenAnswerTextField
