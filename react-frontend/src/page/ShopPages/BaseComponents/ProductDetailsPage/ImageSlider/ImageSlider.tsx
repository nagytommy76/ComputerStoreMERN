import React, { useContext, useRef, useState } from 'react'
import useImgHandle from './Hook/useImgHandle'

import Slide from '@mui/material/Slide'
import { StyledSlideSection, StyledImageContainer, StyledImage } from './SliderStyle'
import DetailsContext from '../../../Context/DetailsContext'

const RightArrow = React.lazy(() => import('./RightArrow'))
const LeftArrow = React.lazy(() => import('./LeftArrow'))
const ImageModal = React.lazy(() => import('./ImgModal/ImageModal'))

const ImageSlider: React.FC = () => {
   const { pictureUrls } = useContext(DetailsContext)
   const { currentPic, direction, isSlide, nextImage, previousImage } = useImgHandle(pictureUrls)
   const [isImgModalOpen, setIsImgModalOpen] = useState<boolean>(false)
   const NodeRef = useRef(null)

   const handleModalOpen = () => {
      setIsImgModalOpen(prevValue => !prevValue)
   }

   return (
      <StyledSlideSection>
         <StyledImageContainer ref={NodeRef}>
            <RightArrow
               pictureUrlsLength={pictureUrls.length}
               nextImage={nextImage}
               currentPic={currentPic}
            />
            <LeftArrow
               pictureUrlsLength={pictureUrls.length}
               previousImage={previousImage}
               currentPic={currentPic}
            />
            <Slide direction={direction} in={isSlide} container={NodeRef.current}>
               <div>
                  {/* <a href={pictureUrls[currentPic]} target='_blank' rel='noreferrer'> */}
                  <StyledImage onClick={handleModalOpen} src={pictureUrls[currentPic]} alt='' />
                  {/* </a> */}
                  <ImageModal
                     handleCloseModal={handleModalOpen}
                     isImgModalOpen={isImgModalOpen}
                     imagesURL={pictureUrls}
                  />
               </div>
            </Slide>
         </StyledImageContainer>
      </StyledSlideSection>
   )
}

export default ImageSlider
