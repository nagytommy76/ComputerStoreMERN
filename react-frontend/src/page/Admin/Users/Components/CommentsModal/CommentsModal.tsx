import React, { useEffect, useState, useContext } from 'react'
import { CommentContext } from '../../Context/CommentContext'
import { axiosInstance } from '../../../../../AxiosSetup/AxiosInstance'

import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledBox } from './Styles'
import { RateState } from '../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

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
               <Typography id='transition-modal-title' variant='h6' component='h2'>
                  {selectedUserIdAndName.userName} felhasználó kommentjei termékeknként
               </Typography>
               <section>
                  {cpuComments.map((comment: IncomingCommentType) => (
                     <div key={comment._id}>
                        {comment.manufacturer} {comment.type}
                     </div>
                  ))}
               </section>
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
   ratingValues: RateState
}
