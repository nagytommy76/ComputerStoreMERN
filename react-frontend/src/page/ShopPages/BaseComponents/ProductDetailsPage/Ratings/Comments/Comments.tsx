import React, { useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import { RatingContext } from '../RatingContext'
import DetailsContext from '../../../../Context/DetailsContext'
import { formatRatedAtToDateType, RateState } from './Helpers'

import Collapse from '@mui/material/Collapse'
import { TransitionGroup } from 'react-transition-group'

import CommentSuspense from '../../../../../../SuspenseComponents/DetailsPage/RatingSuspense/CommentSuspense'
const SingleComment = React.lazy(() => import('./Includes/SingleComment'))

const Comments: React.FC = () => {
   const { productId, productType } = useContext(DetailsContext)
   const { commentRequestSend } = useContext(RatingContext)

   const [allComments, setAllComments] = useState<RateState[]>([])

   useEffect(() => {
      if (productId !== '') {
         axios
            .get(`/${productType}/get-${productType}-comments`, { params: { _id: productId } })
            .then((result: AxiosResponse<RateState[]>) => {
               const ratedAtFormattedToDate = formatRatedAtToDateType(result.data)
               setAllComments(ratedAtFormattedToDate)
            })
            .catch(error => console.log(error))
      }
   }, [productId, commentRequestSend, productType])
   return (
      <TransitionGroup>
         {allComments.map(comment => (
            <Collapse key={comment._id}>
               <React.Suspense fallback={<CommentSuspense />}>
                  <SingleComment comment={comment} setAllComments={setAllComments} />
               </React.Suspense>
            </Collapse>
         ))}
      </TransitionGroup>
   )
}

export default Comments
