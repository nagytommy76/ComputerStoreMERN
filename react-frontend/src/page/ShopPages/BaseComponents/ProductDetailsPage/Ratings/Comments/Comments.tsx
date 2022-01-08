import React, { useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation } from 'react-router-dom'
import { LocationType } from '../../../../BaseTypes'

import { RatingContext } from '../RatingContext'
import { formatRatedAtToDateType, RateState } from './Helpers'

import Collapse from '@mui/material/Collapse'
import { TransitionGroup } from 'react-transition-group'

import CommentSuspense from '../../../../../../SuspenseComponents/DetailsPage/RatingSuspense/CommentSuspense'
const SingleComment = React.lazy(() => import('./Includes/SingleComment'))

const Comments: React.FC = () => {
   const location = useLocation()
   const { _id, productType } = location.state as LocationType

   const { commentRequestSend } = useContext(RatingContext)

   const [allComments, setAllComments] = useState<RateState[]>([])

   useEffect(() => {
      axios
         .get(`/${productType}/get-${productType}-comments`, { params: { _id } })
         .then((result: AxiosResponse<RateState[]>) => {
            const ratedAtFormattedToDate = formatRatedAtToDateType(result.data)
            setAllComments(ratedAtFormattedToDate)
         })
         .catch((error) => console.log(error))
   }, [_id, commentRequestSend, productType])
   return (
      <TransitionGroup>
         {allComments.map((comment) => (
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
