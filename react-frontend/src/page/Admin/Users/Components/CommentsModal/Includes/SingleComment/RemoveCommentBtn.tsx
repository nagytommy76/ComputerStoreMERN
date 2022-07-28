import React, { useContext } from 'react'
import { CommentContext } from '../../../../Context/CommentContext'
import { axiosInstance } from '../../../../../../../AxiosSetup/AxiosInstance'

import Button from '@mui/material/Button'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

const RemoveCommentBtn: React.FC<{ commentToDeletId: string; productID: string }> = ({
   commentToDeletId,
   productID,
}) => {
   const { navLabelsValue } = useContext(CommentContext)

   const handleSingleCommentDelete = async () => {
      try {
         const removeCommentResponse = await axiosInstance.delete(`/admin/users/delete-comment`, {
            data: {
               commentID: commentToDeletId,
               productID,
               productType: navLabelsValue,
            },
         })
         console.log(removeCommentResponse.data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <Button
         sx={{ width: 200 }}
         color='error'
         variant='outlined'
         onClick={handleSingleCommentDelete}
         startIcon={<CancelPresentationIcon />}
      >
         Komment törlése
      </Button>
   )
}

export default RemoveCommentBtn
