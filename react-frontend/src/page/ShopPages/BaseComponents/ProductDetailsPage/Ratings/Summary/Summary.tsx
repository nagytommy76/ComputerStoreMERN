import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { Typography, Rating, Box } from '@mui/material'
import { RatingContext } from '../RatingContext'

const Summary: React.FC = () => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const { commentRequestSend } = useContext(RatingContext)

   const [ratings, setRatings] = useState<{ avgRating: number; rateCount: number }>({ avgRating: 0, rateCount: 0 })
   useEffect(() => {
      axios.get(`/${productType}/get-${productType}-rates`, { params: { _id } }).then((result) => {
         console.log(result.data)
         if (result.data.avgRating !== null) {
            setRatings({
               avgRating: result.data.avgRating,
               rateCount: result.data.rateCount
            })
         }
      })
   }, [_id, commentRequestSend, productType])
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
