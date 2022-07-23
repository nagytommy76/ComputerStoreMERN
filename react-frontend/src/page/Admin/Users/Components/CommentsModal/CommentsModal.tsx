import React, { useContext, useState } from 'react'
import { CommentContext } from '../../Context/CommentContext'
import useGetComments from './Hooks/useGetComments'
import { IncomingCommentType } from './Reducer/ModalReducer'

import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledBox, StyledCommentSection } from './Styles'

const SingleCommentCard = React.lazy(() => import('./Includes/SingleCommentCard'))
const BottomNavigation = React.lazy(() => import('./Includes/Navigation/Navigation'))

export enum NavLabels {
   Processor = 'cpu',
   Vga = 'vga',
   Memory = 'memory',
   HDD = 'hdd',
   SSD = 'ssd',
}

const CommentsModal: React.FC = () => {
   const [navLabelsValue, setNavLabelsValue] = useState<NavLabels>(NavLabels.Processor)
   const { selectedUserIdAndName, isModalOpen, setIsModalOpen } = useContext(CommentContext)
   const { commentsState } = useGetComments(selectedUserIdAndName?.userID)

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
               <StyledCommentSection>
                  {commentsState[navLabelsValue].length > 0 ? (
                     commentsState[navLabelsValue].map((comment: IncomingCommentType) => (
                        <SingleCommentCard
                           key={comment._id}
                           leftTitle={`${comment.manufacturer} ${comment.type}`}
                           comments={comment.ratingValues}
                        />
                     ))
                  ) : (
                     <Typography align='center' variant='h4' component='h2'>
                        Nincsenek kommentek
                     </Typography>
                  )}
               </StyledCommentSection>
               <BottomNavigation setValue={setNavLabelsValue} value={navLabelsValue} />
            </StyledBox>
         </Fade>
      </Modal>
   )
}

export default CommentsModal
