import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { ThumbsContainer, CustomThumbDown, CustomThumbUp, ThumbIconsContainer } from './CommentStyle'
import { Tooltip, ClickAwayListener } from '@mui/material'

const Likes: React.FC<{ productType: string; commentId: string; responses: ResponsesType[] }> = ({
   productType,
   commentId,
   responses
}) => {
   const {
      state: { _id }
   } = useLocation<LocationType>()

   const [isOpen, setIsOpen] = useState<boolean>(false)
   const [tooltipText, setTooltipText] = useState<string>('')
   const [countedLikes, setCountedLikes] = useState({ like: 0, dislike: 0 })

   const countLikesAndDislikes = (incomingResponses: ResponsesType[]) => {
      let likeCount = 0
      let dislikeCount = 0
      incomingResponses.map((likes) => {
         return likes.isLike ? (likeCount += 1) : (dislikeCount += 1)
      })
      setCountedLikes({ like: likeCount, dislike: dislikeCount })
   }

   useEffect(() => {
      countLikesAndDislikes(responses)
      // eslint-disable-next-line
   }, [responses])

   const handleLikeRequest = (isLike: boolean = true) => {
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
   return (
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
         <Tooltip
            title={tooltipText}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            disableFocusListener
            disableHoverListener
            disableTouchListener>
            <ThumbsContainer>
               <ThumbIconsContainer>
                  <CustomThumbUp color='secondary' onClick={() => handleLikeRequest()} />
                  {countedLikes.like}
               </ThumbIconsContainer>
               <ThumbIconsContainer>
                  <CustomThumbDown color='secondary' onClick={() => handleLikeRequest(false)} />
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
