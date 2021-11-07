import React from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import axios from 'axios'

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import { useAppSelector } from '../../../../../../app/hooks'

const DeleteSection: React.FC<{ commentsUserName: string; commentId: string }> = ({ commentsUserName, commentId }) => {
   const {
      state: { productType }
   } = useLocation<LocationType>()
   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)

   const handleCommentDelete = async () => {
      const response = await axios.delete(`/${productType}/${productType}-comment-remove`, {
         data: { commentIdToDelete: commentId }
      })
      console.log(response.data)
   }

   return (
      <>
         {isUserLoggedIn && userName === commentsUserName && (
            <Tooltip title='Komment törlése'>
               <IconButton onClick={handleCommentDelete} sx={{ height: '50%' }} size='large'>
                  <DeleteSweepIcon color='error' fontSize='medium' />
               </IconButton>
            </Tooltip>
         )}
      </>
   )
}

export default DeleteSection
