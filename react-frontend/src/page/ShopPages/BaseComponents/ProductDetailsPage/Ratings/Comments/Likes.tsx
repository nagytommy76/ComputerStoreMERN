import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'
import { ThumbsContainer, CustomThumbDown, CustomThumbUp, ThumbIconsContainer } from './CommentStyle'

const Likes: React.FC<{ commentId: string; responses: { isLike: boolean; userId: string }[] }> = ({ commentId, responses }) => {
   const {
      state: { _id }
   } = useLocation<LocationType>()

   const [countedLikes, setCountedLikes] = useState({ like: 0, dislike: 0 })
   useEffect(() => {
      responses.map((likes) => {
         return likes.isLike
            ? setCountedLikes({ ...countedLikes, like: (countedLikes.like += 1) })
            : setCountedLikes({ ...countedLikes, dislike: (countedLikes.dislike += 1) })
      })
      // eslint-disable-next-line
   }, [responses])

   const handleRequest = (isLike: boolean = true) => {
      console.log(isLike)
      axios
         .post('/cpu/cpu-comment-like', { isLike, productId: _id, commentId })
         .then((result) => {
            console.log(result)
         })
         .catch((error) => console.log(error))
   }
   return (
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
   )
}

export default Likes
