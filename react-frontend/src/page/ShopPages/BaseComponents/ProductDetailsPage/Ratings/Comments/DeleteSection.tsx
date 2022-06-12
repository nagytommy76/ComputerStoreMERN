import React, { useContext } from 'react'
import { axiosInstance } from '../../../../../../AxiosSetup/AxiosInstance'

import { RatingContext } from '../RatingContext'
import DetailsContext from '../../../../Context/DetailsContext'
import { formatRatedAtToDateType, RateState } from './Helpers'

const Delete = React.lazy(() => import('./Includes/DeleteIcon'))

const DeleteSection: React.FC<{
   commentsUserName: string
   commentId: string
   setComments: React.Dispatch<React.SetStateAction<RateState[]>>
}> = ({ commentsUserName, commentId, setComments }) => {
   const { productType, productId } = useContext(DetailsContext)
   const { setCommentDeletedRequest } = useContext(RatingContext)

   const handleCommentDelete = async () => {
      try {
         const response = await axiosInstance.delete(`/${productType}/${productType}-comment-remove`, {
            data: { commentIdToDelete: commentId, productId },
         })
         if (response.status === 200) {
            const ratedAtFormattedToDate = formatRatedAtToDateType(response.data.foundProduct.ratingValues)
            setComments(ratedAtFormattedToDate)
            setCommentDeletedRequest(prevValue => !prevValue)
         }
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <Delete deleteText='Komment' handleDelete={handleCommentDelete} incomingUserName={commentsUserName} />
   )
}

export default DeleteSection
