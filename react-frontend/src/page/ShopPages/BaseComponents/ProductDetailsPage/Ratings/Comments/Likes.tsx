import React, { useContext, useEffect, useState } from 'react'
import { axiosInstance, AxiosError } from '../../../../../../AxiosSetup/AxiosInstance'
import { useAppSelector } from '../../../../../../app/hooks'

import DetailsContext from '../../../../Context/DetailsContext'

import { ThumbsContainer, CustomThumbDown, CustomThumbUp, ThumbIconsContainer } from './CommentStyle'
import { Tooltip, ClickAwayListener } from '@mui/material'

const Likes: React.FC<{
   commentId: string
   responses: ResponsesType[]
   commentUserId: string
   answerId?: string
}> = ({ commentUserId, commentId, responses, answerId = undefined }) => {
   const { productType, productId } = useContext(DetailsContext)

   const isUserLoggedIn = useAppSelector(state => state.auth.userLoggedIn)
   const userId = useAppSelector(state => state.auth.userId)

   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [tooltipText, setTooltipText] = useState<string>('')
   const [countedLikes, setCountedLikes] = useState({
      like: 0,
      dislike: 0,
      usersLike: false,
      usersDislike: false,
   })

   const countLikesAndDislikes = (incomingResponses: ResponsesType[]) => {
      let likeCount = 0,
         dislikeCount = 0,
         usersLike = false,
         usersDislike = false
      incomingResponses.map(likes => {
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
         axiosInstance
            .post(`/${productType}/${productType}-comment-like`, { isLike, productId, commentId, answerId })
            .then(result => {
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

   const isUsersComment = () => isUserLoggedIn && commentUserId !== userId

   return (
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
         <Tooltip
            title={tooltipText}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            disableFocusListener
            disableHoverListener
            disableTouchListener
         >
            <ThumbsContainer usersComment={isUsersComment()}>
               <ThumbIconsContainer>
                  <CustomThumbUp
                     color={countedLikes.usersLike ? 'primary' : 'secondary'}
                     onClick={() => handleLikeRequest()}
                  />
                  {countedLikes.like}
               </ThumbIconsContainer>
               <ThumbIconsContainer>
                  <CustomThumbDown
                     color={countedLikes.usersDislike ? 'error' : 'secondary'}
                     onClick={() => handleLikeRequest(false)}
                  />
                  {countedLikes.dislike}
               </ThumbIconsContainer>
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
