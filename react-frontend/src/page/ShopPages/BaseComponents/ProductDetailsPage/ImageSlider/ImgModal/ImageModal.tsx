import React, { useContext } from 'react'
import DetailsContext from '../../../../Context/DetailsContext'
import useImgHandle from '../Hook/useImgHandle'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledImage, StyledModal, ImageContainer } from './Styles'
import ImagePreview from './ImagePreview/ImagePreview'
import ImgModalHeader from './ImgModalHeader'
import LeftArrow from '../LeftArrow'
import RightArrow from '../RightArrow'

const ImageModal: React.FC<{
   isImgModalOpen: boolean
   handleCloseModal: () => void
}> = ({ isImgModalOpen, handleCloseModal }) => {
   const { pictureUrls } = useContext(DetailsContext)
   const { currentPic, isSlide, nextImage, previousImage, setCurrentPictureToAnyIndex } =
      useImgHandle(pictureUrls)

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
                  pictureUrlsLength={pictureUrls.length}
               />
               <LeftArrow
                  currentPic={currentPic}
                  previousImage={previousImage}
                  pictureUrlsLength={pictureUrls.length}
               />
               <Fade in={isSlide}>
                  <ImageContainer>
                     <StyledImage src={pictureUrls[currentPic]} alt='' />
                  </ImageContainer>
               </Fade>
               <ImagePreview
                  setCurrentPictureToAnyIndex={setCurrentPictureToAnyIndex}
                  currentPic={currentPic}
               />
            </StyledModal>
         </Fade>
      </Modal>
   )
}

export default ImageModal
