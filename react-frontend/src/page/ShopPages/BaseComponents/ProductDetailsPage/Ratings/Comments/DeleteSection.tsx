import React, { useContext } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { RatingContext } from '../RatingContext'
import { formatRatedAtToDateType, RateState } from './Helpers'

const Delete = React.lazy(() => import('./Includes/DeleteIcon'))

const DeleteSection: React.FC<{
   commentsUserName: string
   commentId: string
   setComments: React.Dispatch<React.SetStateAction<RateState[]>>
}> = ({ commentsUserName, commentId, setComments }) => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const { setCommentDeletedRequest } = useContext(RatingContext)

   const handleCommentDelete = async () => {
      try {
         const response = await axios.delete(`/${productType}/${productType}-comment-remove`, {
            data: { commentIdToDelete: commentId, productId: _id }
         })
         if (response.status === 200) {
            const ratedAtFormattedToDate = formatRatedAtToDateType(response.data.foundCpuProduct.ratingValues)
            setComments(ratedAtFormattedToDate)
            setCommentDeletedRequest((prevValue) => !prevValue)
         }
      } catch (error) {
         console.log(error)
      }
   }

   return <Delete deleteText='Komment' handleDelete={handleCommentDelete} incomingUserName={commentsUserName} />
}

export default DeleteSection
