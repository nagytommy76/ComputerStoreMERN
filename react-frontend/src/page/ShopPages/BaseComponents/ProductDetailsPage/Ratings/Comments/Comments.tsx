import React, { useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'

import { RatingContext } from '../RatingContext'
import { formatRatedAtToDateType, RateState } from './Helpers'

import Collapse from '@mui/material/Collapse'
import { TransitionGroup } from 'react-transition-group'

const SingleComment = React.lazy(() => import('./Includes/SingleComment'))

const Comments: React.FC = () => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const { commentRequestSend } = useContext(RatingContext)

   const [allComments, setAllComments] = useState<RateState[]>([])

   useEffect(() => {
      axios.get(`/${productType}/get-${productType}-comments`, { params: { _id } }).then((result: AxiosResponse<RateState[]>) => {
         const ratedAtFormattedToDate = formatRatedAtToDateType(result.data)
         setAllComments(ratedAtFormattedToDate)
      })
   }, [_id, commentRequestSend, productType])
   return (
      <TransitionGroup>
         {allComments.map((comment) => (
            <Collapse key={comment._id}>
               <SingleComment comment={comment} setAllComments={setAllComments} />
            </Collapse>
         ))}
      </TransitionGroup>
   )
}

export default Comments
