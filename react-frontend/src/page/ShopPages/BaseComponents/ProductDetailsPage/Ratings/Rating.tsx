import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../BaseTypes'
import { RatingContainer } from './RatingStyle'
import { Rating as RatingMU, Typography, Button, TextField } from '@mui/material'

const Rating = () => {
   const location = useLocation<LocationType>()
   const { _id } = location.state
   const [rating, setRating] = useState<number | null>(null)
   return (
      <RatingContainer>
         <Typography>Értékelés</Typography>
         <RatingMU
            name='simple-controlled'
            size='large'
            value={rating}
            onChange={(event, newValue) => {
               setRating(newValue)
            }}
         />
         <TextField label='Multiline' multiline rows={7} />
         <Button color='success' variant='outlined' size='large'>
            Külés
         </Button>
      </RatingContainer>
   )
}

export default Rating
