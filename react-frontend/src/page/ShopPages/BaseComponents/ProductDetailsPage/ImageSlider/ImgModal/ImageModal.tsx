import React from 'react'
import useImgHandle from '../Hook/useImgHandle'

import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledImage, StyledModal } from './Styles'
import CloseModalBtn from './CloseModalBtn'
import LeftArrow from '../LeftArrow'
import RightArrow from '../RightArrow'

const ImageModal: React.FC<{
   imagesURL: string[]
   isImgModalOpen: boolean
   handleCloseModal: () => void
}> = ({ imagesURL, isImgModalOpen, handleCloseModal }) => {
   const { currentPic, isSlide, nextImage, previousImage } = useImgHandle(imagesURL)

   return (
      <Modal
         aria-labelledby='transition-modal-title'
         aria-describedby='transition-modal-description'
         open={isImgModalOpen}
         onClose={handleCloseModal}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
         }}
      >
         <Fade in={isImgModalOpen}>
            <StyledModal>
               <CloseModalBtn />
               <RightArrow
                  currentPic={currentPic}
                  nextImage={nextImage}
                  pictureUrlsLength={imagesURL.length}
               />
               <LeftArrow
                  currentPic={currentPic}
                  previousImage={previousImage}
                  pictureUrlsLength={imagesURL.length}
               />
               <Fade in={isSlide}>
                  <StyledImage src={imagesURL[currentPic]} alt='' />
               </Fade>
            </StyledModal>
         </Fade>
      </Modal>
   )
}

export default ImageModal
