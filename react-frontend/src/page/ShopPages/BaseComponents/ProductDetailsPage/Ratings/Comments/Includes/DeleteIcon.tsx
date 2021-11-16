import React from 'react'

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import { useAppSelector } from '../../../../../../../app/hooks'

const DeleteIcon: React.FC<{ incomingUserName: string; handleDelete: () => void; deleteText?: string }> = ({
   incomingUserName,
   handleDelete,
   deleteText = 'Válasz'
}) => {
   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)
   return (
      <>
         {isUserLoggedIn && userName === incomingUserName && (
            <Tooltip title={`${deleteText} törlése`} arrow placement='top'>
               <IconButton id={deleteText} onClick={handleDelete} sx={{ height: '50%' }} size='medium'>
                  <DeleteSweepIcon color={deleteText === 'Válasz' ? 'primary' : 'error'} fontSize='medium' />
               </IconButton>
            </Tooltip>
         )}
      </>
   )
}

export default DeleteIcon
