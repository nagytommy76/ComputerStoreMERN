import React, { useState } from 'react'
import axios, { AxiosError } from 'axios'

import { useAppSelector } from '../../../../../../app/hooks'
import { RatingContext } from '../RatingContext'

import { useLocation } from 'react-router-dom'
import { LocationType } from '../../../../BaseTypes'

import { RatingContainer, StyledButton, LeftContent, RightContent, CustomCardContent } from './RatingStyle'
import { Rating as RatingMU, Typography, TextField, Alert, Grow, Card } from '@mui/material'

import RatingSuspense from '../../../../../../SuspenseComponents/DetailsPage/RatingSuspense/RatingSuspense'
const RatingSummary = React.lazy(() => import('../Summary/Summary'))
const Comments = React.lazy(() => import('../Comments/Comments'))

const Rating = () => {
   const location = useLocation()
   const { _id, productType } = location.state as LocationType

   const userName = useAppSelector((state) => state.auth.userName)
   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const [rating, setRating] = useState<number | null>(4)
   const [comment, setComment] = useState<string>('')
   const [hasError, setHasError] = useState<{ isError: boolean; message: string }>({ isError: false, message: '' })
   const [commentRequestSend, setCommentRequestSend] = useState<boolean>(false)
   const [commentDeletedRequest, setCommentDeletedRequest] = useState<boolean>(false)

   const setDefaultValues = () => {
      setComment('')
      setHasError({ isError: false, message: '' })
      setRating(3)
   }

   const sendRating = () => {
      if (!isUserLoggedIn) setHasError({ isError: true, message: 'Az értékeléshez kérlek jelentkezz be!' })
      else if (rating === null) setHasError({ isError: true, message: 'Kötelező értékelést adni!' })
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
                  setCommentRequestSend((prevValue) => !prevValue)
                  setDefaultValues()
               }
            })
            .catch((error: AxiosError) => {
               if (error.response?.status === 422)
                  setHasError({ isError: true, message: 'Már értékelted a terméket! Kérlek töröld és értékeld újra!' })
            })
      }
   }
   return (
      <React.Suspense fallback={<RatingSuspense />}>
         <RatingContext.Provider
            value={{
               commentDeletedRequest,
               setCommentDeletedRequest,
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
                              if (newValue === null) setHasError({ isError: true, message: 'Kötelező értékelést adni!' })
                              else setHasError({ isError: false, message: '' })
                           }}
                        />
                        <TextField
                           fullWidth
                           id='comment'
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
                        <Grow in={hasError.isError}>
                           <Alert severity='error'>{hasError.message}</Alert>
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
      </React.Suspense>
   )
}

export default Rating
