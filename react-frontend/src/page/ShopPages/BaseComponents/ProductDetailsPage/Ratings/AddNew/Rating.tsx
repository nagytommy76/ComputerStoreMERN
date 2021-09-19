import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { RatingContainer, StyledButton } from './RatingStyle'
import { Rating as RatingMU, Typography, TextField, Alert, Grow } from '@mui/material'
import { useAppSelector } from '../../../../../../app/hooks'

const Rating = () => {
   const {
      state: { _id }
   } = useLocation<LocationType>()
   const userName = useAppSelector((state) => state.auth.userName)
   const [rating, setRating] = useState<number | null>(3)
   const [comment, setComment] = useState<string>('')
   const [hasError, setHasError] = useState<boolean>(false)

   const setDefaultValues = () => {
      setComment('')
      setHasError(false)
      setRating(3)
   }

   const handleRating = () => {
      if (rating === null) setHasError(true)
      else {
         axios
            .post('/cpu/rate-cpu', {
               _id,
               rating,
               comment,
               userName
            })
            .then((result) => {
               if (result.status === 201) setDefaultValues()
            })
            .catch((error) => console.log(error))
      }
   }
   return (
      <RatingContainer>
         <Typography variant='h5'>Értékelés</Typography>
         <RatingMU
            precision={0.5}
            name='simple-controlled'
            size='large'
            value={rating}
            onChange={(event, newValue) => {
               setRating(newValue)
               setHasError(false)
            }}
         />
         <TextField
            fullWidth
            variant='outlined'
            color='success'
            label='Hozzászólás'
            multiline
            rows={7}
            value={comment}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)}
         />
         <StyledButton onClick={handleRating} color='success' variant='outlined' size='large'>
            Értékelés Leadása
         </StyledButton>
         <Grow in={hasError}>
            <Alert severity='error'>Kötelező értékelést adni!</Alert>
         </Grow>
      </RatingContainer>
   )
}

export default Rating
