import React, { useEffect } from 'react'
import { axiosInstance } from '../../../../AxiosSetup/AxiosInstance'

import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 700,
   minHeight: 500,
   bgcolor: 'primary.dark',
   borderRadius: '4px',
   boxShadow: 24,
   p: 4,
}

const CommentsModal: React.FC<{
   userID: string | null
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ userID, isOpen, setIsOpen }) => {
   useEffect(() => {
      const fetchUserComments = async () => {
         try {
            const response = await axiosInstance.get(`/admin/users/get-all-rating`, {
               params: {
                  userID,
               },
            })
            console.log(response.data)
         } catch (error) {
            console.log(error)
         }
      }
      userID && fetchUserComments()
   }, [userID])

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
            <Box sx={style}>
               {/* <Typography id="transition-modal-title" variant="h6" component="h2">
                    Text in a modal
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
               <Typography variant='body1'>
                  Ide jönnek az adott felhasználó kommentjei USERID: {userID}
               </Typography>
            </Box>
         </Fade>
      </Modal>
   )
}

export default CommentsModal
