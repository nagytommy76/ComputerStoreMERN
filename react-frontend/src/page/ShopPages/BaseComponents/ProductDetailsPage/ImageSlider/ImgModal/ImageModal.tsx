import React, { useContext, useEffect } from 'react'
import DetailsContext from '../../../../Context/DetailsContext'
import useImgHandle from '../Hook/useImgHandle'

import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

import { StyledImage, StyledModal, ImageContainer } from './Styles'
import ImagePreview from './ImagePreview/ImagePreview'
import ImgModalHeader from './ImgModalHeader'
import RightArrow from '../RightArrow'
import LeftArrow from '../LeftArrow'

const ImageModal: React.FC<{
   isImgModalOpen: boolean
   handleCloseModal: () => void
   actualCurrentPic: number
}> = ({ isImgModalOpen, handleCloseModal, actualCurrentPic }) => {
   const { pictureUrls } = useContext(DetailsContext)
   const { currentPic, nextImage, previousImage, setCurrentPictureToAnyIndex, isSlide } =
      useImgHandle(pictureUrls)

   useEffect(() => {
      setCurrentPictureToAnyIndex(actualCurrentPic)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [actualCurrentPic])

   return (
      <Modal
         aria-labelledby='transition-modal-title'
         aria-describedby='transition-modal-description'
         open={isImgModalOpen}
         onClose={handleCloseModal}
         closeAfterTransition
      >
         <Fade in={isImgModalOpen} unmountOnExit mountOnEnter>
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
