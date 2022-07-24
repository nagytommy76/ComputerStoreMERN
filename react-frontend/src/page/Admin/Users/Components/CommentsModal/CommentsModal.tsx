import React, { useContext } from 'react'
import { CommentContext } from '../../Context/CommentContext'

import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledBox } from './Styles'

const BottomNavigation = React.lazy(() => import('./Includes/Navigation/Navigation'))
const CommentSection = React.lazy(() => import('./Includes/Modal/CommentSection'))

const CommentsModal: React.FC = () => {
   const { selectedUserIdAndName, isModalOpen, setIsModalOpen } = useContext(CommentContext)

   return (
      <Modal
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
               <Typography
                  align='center'
                  pt={1}
                  pb={3}
                  id='transition-modal-title'
                  variant='h4'
                  component='h2'
               >
                  Kommentek {selectedUserIdAndName.userName} felhasználótól
               </Typography>
               <CommentSection />

               <BottomNavigation />
            </StyledBox>
         </Fade>
      </Modal>
   )
}

export default CommentsModal
