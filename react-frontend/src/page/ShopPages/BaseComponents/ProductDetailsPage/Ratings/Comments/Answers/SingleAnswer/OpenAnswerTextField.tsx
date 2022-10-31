import React from 'react'
import { useAppSelector } from '../../../../../../../../app/hooks'

import IconButton from '@mui/material/IconButton'
import ReplyIcon from '@mui/icons-material/Reply'
import EditIcon from '@mui/icons-material/Edit'
import Tooltip from '@mui/material/Tooltip'

const BaseTooltip: React.FC<{
   children: React.ReactNode
   handleAnswerOpen: () => void
   title: string
   color: ColorTypes
}> = ({ children, handleAnswerOpen, title, color }) => {
   return (
      <Tooltip arrow title={title} placement='top'>
         <IconButton onClick={handleAnswerOpen} aria-label='answer' color={color}>
            {children}
         </IconButton>
      </Tooltip>
   )
}

const OpenAnswerTextField: React.FC<{
   setIsAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
   commentUserId: string
}> = ({ setIsAnswerOpen, commentUserId }) => {
   const { userLoggedIn, userId } = useAppSelector(state => state.auth)
   const isUsersComment = userLoggedIn && commentUserId !== userId
   const isUsersAnswer = userLoggedIn && commentUserId === userId
   const handleAnswerOpen = () => setIsAnswerOpen(prevValue => !prevValue)

   return (
      <>
         {isUsersComment && (
            <BaseTooltip color='success' title='Válasz küldése' handleAnswerOpen={handleAnswerOpen}>
               <ReplyIcon />
            </BaseTooltip>
         )}
         {isUsersAnswer && (
            <BaseTooltip color='info' title='Válasz módosítása' handleAnswerOpen={handleAnswerOpen}>
               <EditIcon />
            </BaseTooltip>
         )}
      </>
   )
}

export default OpenAnswerTextField

type ColorTypes =
   | 'success'
   | 'inherit'
   | 'default'
   | 'primary'
   | 'secondary'
   | 'error'
   | 'info'
   | 'warning'
   | undefined
