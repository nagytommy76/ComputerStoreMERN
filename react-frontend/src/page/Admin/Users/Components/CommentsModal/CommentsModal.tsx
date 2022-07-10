import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../../../../AxiosSetup/AxiosInstance'

import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledBox } from './Styles'
import { RateState } from '../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

const CommentsModal: React.FC<{
   userInfo: { userID: string | null; userName: string }
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ userInfo, isOpen, setIsOpen }) => {
   const [cpuComments, setCpuComments] = useState<IncomingCommentType[]>([])

   useEffect(() => {
      const fetchUserComments = async () => {
         try {
            const response = await axiosInstance.get(`/admin/users/get-all-rating`, {
               params: {
                  userID: userInfo.userID,
               },
            })
            console.log(response.data)
            setCpuComments(response.data.cpu)
         } catch (error) {
            console.log(error)
         }
      }
      userInfo.userID && fetchUserComments()
   }, [userInfo.userID])

   return (
      <Modal
         aria-labelledby='transition-modal-title'
         aria-describedby='transition-modal-description'
         open={isOpen}
         onClose={() => setIsOpen(false)}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
         }}
      >
         <Fade in={isOpen}>
            <StyledBox>
               <Typography id='transition-modal-title' variant='h6' component='h2'>
                  {userInfo.userName} felhasználó kommentjei termékeknként
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
