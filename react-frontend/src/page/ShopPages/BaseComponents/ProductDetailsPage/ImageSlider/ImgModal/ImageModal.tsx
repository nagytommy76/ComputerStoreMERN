import React from 'react'
import useImgHandle from '../Hook/useImgHandle'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledImage, StyledModal, ImageContainer } from './Styles'
import ImgModalHeader from './ImgModalHeader'
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
      >
         <Fade in={isImgModalOpen}>
            <StyledModal>
               <ImgModalHeader handleCloseModal={handleCloseModal} />
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
                  <ImageContainer>
                     <StyledImage src={imagesURL[currentPic]} alt='' />
                  </ImageContainer>
               </Fade>
            </StyledModal>
         </Fade>
      </Modal>
   )
}

export default ImageModal
