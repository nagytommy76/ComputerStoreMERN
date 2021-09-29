import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { ThumbsContainer, CustomThumbDown, CustomThumbUp, ThumbIconsContainer } from './CommentStyle'
import { Tooltip, ClickAwayListener } from '@mui/material'

const Likes: React.FC<{ productType: string; commentId: string; responses: { isLike: boolean; userId: string }[] }> = ({
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
   useEffect(() => {
      responses.map((likes) => {
         return likes.isLike
            ? setCountedLikes({ ...countedLikes, like: (countedLikes.like += 1) })
            : setCountedLikes({ ...countedLikes, dislike: (countedLikes.dislike += 1) })
      })
      // eslint-disable-next-line
   }, [responses, axios])

   const handleRequest = (isLike: boolean = true) => {
      axios
         .post(`/${productType}/${productType}-comment-like`, { isLike, productId: _id, commentId })
         .then((result) => {
            console.log(result)
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
                  <CustomThumbUp color='secondary' onClick={() => handleRequest()} />
                  {countedLikes.like}
               </ThumbIconsContainer>
               <ThumbIconsContainer>
                  <CustomThumbDown color='secondary' onClick={() => handleRequest(false)} />
                  {countedLikes.dislike}
               </ThumbIconsContainer>
            </ThumbsContainer>
         </Tooltip>
      </ClickAwayListener>
   )
}

export default Likes
