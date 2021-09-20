import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { SummaryContainer } from './StyleSummary'
import { Typography, Rating } from '@mui/material'

const Summary = () => {
   const {
      state: { _id }
   } = useLocation<LocationType>()
   const [ratings, setRatings] = useState<{ avgRating: number; rateCount: number }>({ avgRating: 0, rateCount: 0 })
   useEffect(() => {
      axios.get('/cpu/get-cpu-rates', { params: { _id } }).then((result) => {
         console.log(result)
         setRatings({
            avgRating: result.data.avgRating,
            rateCount: result.data.rateCount
         })
      })
   }, [])
   return (
      <SummaryContainer>
         <Typography variant='h3'>{ratings.avgRating}</Typography>
         <Typography variant='subtitle2'>Összesen {ratings.rateCount} értékelés</Typography>
         <Rating sx={{ fontSize: '3rem' }} value={ratings.avgRating} readOnly size='large' />
      </SummaryContainer>
   )
}

export default Summary
