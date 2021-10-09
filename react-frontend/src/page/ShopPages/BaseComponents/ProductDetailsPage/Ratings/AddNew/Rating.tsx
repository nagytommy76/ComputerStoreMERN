import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { RatingContainer, StyledButton, LeftContent, RightContent, CustomCardContent } from './RatingStyle'
import { Rating as RatingMU, Typography, TextField, Alert, Grow, Card } from '@mui/material'
import { useAppSelector } from '../../../../../../app/hooks'
import { RatingContext } from '../RatingContext'

const RatingSummary = React.lazy(() => import('../Summary/Summary'))
const Comments = React.lazy(() => import('../Comments/Comments'))

const Rating = () => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const userName = useAppSelector((state) => state.auth.userName)
   const [rating, setRating] = useState<number | null>(3)
   const [comment, setComment] = useState<string>('')
   const [hasError, setHasError] = useState<boolean>(false)
   const [commentRequestSend, setCommentRequestSend] = useState<boolean>(false)

   const setDefaultValues = () => {
      setComment('')
      setHasError(false)
      setRating(3)
   }

   const sendRating = () => {
      if (rating === null) setHasError(true)
      else {
         axios
            .post(`/${productType}/rate-${productType}`, {
               _id,
               rating,
               comment,
               userName
            })
            .then((result) => {
               if (result.status === 201) {
                  setCommentRequestSend(true)
                  setDefaultValues()
               }
            })
            .catch((error) => console.log(error))
      }
   }
   return (
      <RatingContext.Provider
         value={{
            commentRequestSend,
            setCommentRequestSend
         }}>
         <RatingContainer>
            <Card>
               <CustomCardContent>
                  <LeftContent>
                     <Typography variant='h4'>Értékelés leadása</Typography>
                     <RatingMU
                        sx={{ fontSize: '2.5rem', margin: '.4rem 0' }}
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
                        variant='filled'
                        color='success'
                        label='Hozzászólás'
                        multiline
                        rows={7}
                        value={comment}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setComment(event.target.value)}
                     />
                     <StyledButton onClick={sendRating} color='success' variant='outlined' size='large'>
                        Értékelés Leadása
                     </StyledButton>
                     <Grow in={hasError}>
                        <Alert severity='error'>Kötelező értékelést adni!</Alert>
                     </Grow>
                  </LeftContent>
                  <RightContent>
                     <RatingSummary />
                  </RightContent>
               </CustomCardContent>
            </Card>
            <Comments />
         </RatingContainer>
      </RatingContext.Provider>
   )
}

export default Rating
