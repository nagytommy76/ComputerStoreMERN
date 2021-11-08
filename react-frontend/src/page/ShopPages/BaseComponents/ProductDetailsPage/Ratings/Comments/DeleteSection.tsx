import React, { useContext } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { RatingContext } from '../RatingContext'
import { formatRatedAtToDateType, RateState } from './Helpers'

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

import { useAppSelector } from '../../../../../../app/hooks'

const DeleteSection: React.FC<{
   commentsUserName: string
   commentId: string
   setComments: React.Dispatch<React.SetStateAction<RateState[]>>
}> = ({ commentsUserName, commentId, setComments }) => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const { setCommentDeletedRequest } = useContext(RatingContext)
   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userName = useAppSelector((state) => state.auth.userName)

   const handleCommentDelete = async () => {
      const response = await axios.delete(`/${productType}/${productType}-comment-remove`, {
         data: { commentIdToDelete: commentId, productId: _id }
      })
      if (response.status === 200) {
         const ratedAtFormattedToDate = formatRatedAtToDateType(response.data.foundCpuProduct.ratingValues)
         setComments(ratedAtFormattedToDate)
         setCommentDeletedRequest((prevValue) => !prevValue)
         console.log(response.data.foundCpuProduct.ratingValues)
      }
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
