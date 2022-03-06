import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import DetailsContext from '../../../../Context/DetailsContext'
import { RatingContext } from '../RatingContext'

import { Typography, Rating, Box } from '@mui/material'

const Summary: React.FC = () => {
   const { commentRequestSend, commentDeletedRequest } = useContext(RatingContext)
   const { productType, productId } = useContext(DetailsContext)
   const [ratings, setRatings] = useState<{ avgRating: number; rateCount: number }>({
      avgRating: 0,
      rateCount: 0,
   })
   useEffect(() => {
      if (productId !== '') {
         axios
            .get(`/${productType}/get-${productType}-rates`, { params: { _id: productId } })
            .then(result => {
               if (result.data.avgRating !== null) {
                  setRatings({
                     avgRating: result.data.avgRating,
                     rateCount: result.data.rateCount,
                  })
               }
            })
            .catch(error => console.log(error))
      }
   }, [productId, commentRequestSend, commentDeletedRequest, productType])
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
