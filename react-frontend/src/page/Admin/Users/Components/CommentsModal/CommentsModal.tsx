import React, { useEffect, useState, useContext } from 'react'
import { CommentContext } from '../../Context/CommentContext'
import { axiosInstance } from '../../../../../AxiosSetup/AxiosInstance'

import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledBox, StyledCommentSection, StyledCommentCard } from './Styles'
import { RateState } from '../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

const SingleCommentCard = React.lazy(() => import('./Includes/SingleCommentCard'))

const CommentsModal: React.FC = () => {
   const { selectedUserIdAndName, isModalOpen, setIsModalOpen } = useContext(CommentContext)
   const [cpuComments, setCpuComments] = useState<IncomingCommentType[]>([])

   useEffect(() => {
      const fetchUserComments = async () => {
         try {
            const response = await axiosInstance.get(`/admin/users/get-all-rating`, {
               params: {
                  userID: selectedUserIdAndName.userID,
               },
            })
            console.log(response.data)
            setCpuComments(response.data.cpu)
         } catch (error) {
            console.log(error)
         }
      }
      selectedUserIdAndName.userID && fetchUserComments()
   }, [selectedUserIdAndName.userID])

   return (
      <Modal
         aria-labelledby='transition-modal-title'
         aria-describedby='transition-modal-description'
         open={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
         }}
      >
         <Fade in={isModalOpen}>
            <StyledBox>
               <Typography align='center' m={2} id='transition-modal-title' variant='h4' component='h2'>
                  {selectedUserIdAndName.userName}
               </Typography>
               <StyledCommentSection>
                  {cpuComments.map((comment: IncomingCommentType) => (
                     <>
                        <Typography variant='body1' key={comment._id}>
                           {comment.manufacturer} {comment.type}
                        </Typography>
                        <SingleCommentCard comments={comment.ratingValues} />
                     </>
                  ))}
               </StyledCommentSection>
            </StyledBox>
         </Fade>
      </Modal>
   )
}

export default CommentsModal

type IncomingCommentType = {
   manufacturer: string
   _id: string
   type: string
   ratingValues: RateState[]
}
