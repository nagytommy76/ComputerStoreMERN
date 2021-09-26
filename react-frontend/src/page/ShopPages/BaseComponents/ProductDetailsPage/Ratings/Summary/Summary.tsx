import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { Typography, Rating, Box } from '@mui/material'

const Summary: React.FC<{ requestSend: boolean }> = ({ requestSend }) => {
   const {
      state: { _id }
   } = useLocation<LocationType>()
   const [ratings, setRatings] = useState<{ avgRating: number; rateCount: number }>({ avgRating: 0, rateCount: 0 })
   useEffect(() => {
      axios.get('/cpu/get-cpu-rates', { params: { _id } }).then((result) => {
         if (result.data.avgRating !== null) {
            setRatings({
               avgRating: result.data.avgRating,
               rateCount: result.data.rateCount
            })
         }
      })
   }, [_id, requestSend])
   return ratings.avgRating ? (
      <Box>
         <Typography variant='h3'>{ratings.avgRating.toFixed(2)}</Typography>
         <Typography variant='subtitle2'>Összesen {ratings.rateCount} értékelés</Typography>
         <Rating sx={{ fontSize: '3rem' }} value={ratings.avgRating} readOnly size='large' />
      </Box>
   ) : (
      <Box>
         <Typography variant='h4'>Nem érkezett még értékelés</Typography>
      </Box>
   )
}

export default Summary
