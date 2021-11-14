import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'

import { useAppSelector } from '../../../../../../app/hooks'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'

import { ThumbsContainer, CustomThumbDown, CustomThumbUp, ThumbIconsContainer } from './CommentStyle'
import { Tooltip, ClickAwayListener } from '@mui/material'
import Button from '@mui/material/Button'

const Likes: React.FC<{
   commentId: string
   responses: ResponsesType[]
   setIsAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
   commentUserId: string
}> = ({ commentUserId, commentId, responses, setIsAnswerOpen }) => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()

   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const userId = useAppSelector((state) => state.auth.userId)

   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [tooltipText, setTooltipText] = useState<string>('')
   const [countedLikes, setCountedLikes] = useState({
      like: 0,
      dislike: 0,
      usersLike: false,
      usersDislike: false
   })

   const countLikesAndDislikes = (incomingResponses: ResponsesType[]) => {
      let likeCount = 0,
         dislikeCount = 0,
         usersLike = false,
         usersDislike = false
      incomingResponses.map((likes) => {
         if (likes.isLike) {
            if (userId === likes.userId) usersLike = true
            return (likeCount += 1)
         } else {
            if (userId === likes.userId) usersDislike = true
            return (dislikeCount += 1)
         }
      })
      setCountedLikes({ usersLike, usersDislike, like: likeCount, dislike: dislikeCount })
   }

   useEffect(() => {
      countLikesAndDislikes(responses)
      // eslint-disable-next-line
   }, [responses])

   const handleLikeRequest = (isLike: boolean = true) => {
      if (!isUserLoggedIn) {
         setIsOpen(true)
         setTooltipText('Kérlek jelentkezz be a likeoláshoz!')
      } else {
         axios
            .post(`/${productType}/${productType}-comment-like`, { isLike, productId: _id, commentId })
            .then((result) => {
               if (result.status === 201) {
                  countLikesAndDislikes(result.data.responses)
               }
            })
            .catch((error: AxiosError) => {
               if (error.response?.status === 405) {
                  setIsOpen(true)
                  setTooltipText(error.response.data.message)
               }
            })
      }
   }

   const handleAnswerOpen = () => setIsAnswerOpen((prevValue) => !prevValue)

   const isUsersComment = () => isUserLoggedIn && commentUserId !== userId

   return (
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
         <Tooltip
            title={tooltipText}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            disableFocusListener
            disableHoverListener
            disableTouchListener>
            <ThumbsContainer usersComment={isUsersComment()}>
               <ThumbIconsContainer>
                  <CustomThumbUp color={countedLikes.usersLike ? 'primary' : 'secondary'} onClick={() => handleLikeRequest()} />
                  {countedLikes.like}
               </ThumbIconsContainer>
               <ThumbIconsContainer>
                  <CustomThumbDown
                     color={countedLikes.usersDislike ? 'error' : 'secondary'}
                     onClick={() => handleLikeRequest(false)}
                  />
                  {countedLikes.dislike}
               </ThumbIconsContainer>
               {isUsersComment() && (
                  <Button onClick={handleAnswerOpen} color='success' variant='outlined'>
                     Válasz
                  </Button>
               )}
            </ThumbsContainer>
         </Tooltip>
      </ClickAwayListener>
   )
}

type ResponsesType = {
   _id?: string
   isLike: boolean
   userId: string
}

export default Likes
