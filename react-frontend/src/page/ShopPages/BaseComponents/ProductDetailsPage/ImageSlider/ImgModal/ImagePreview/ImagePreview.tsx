import React, { useContext } from 'react'
import DetailsContext from '../../../../../Context/DetailsContext'

import { StyledContainer, StyledImage } from './Style'

const ImagePreview: React.FC<{
   currentPic: number
   setCurrentPictureToAnyIndex: (indexToSet: number) => void
}> = ({ currentPic, setCurrentPictureToAnyIndex }) => {
   const { pictureUrls } = useContext(DetailsContext)
   const handleChangeOnClick = (event: React.MouseEvent<HTMLElement>, index: number) =>
      setCurrentPictureToAnyIndex(index)

   return (
      <StyledContainer>
         {pictureUrls.map((image, index) => (
            <StyledImage
               onClick={event => handleChangeOnClick(event, index)}
               isActive={index === currentPic}
               key={index}
               src={image}
               alt=''
            />
         ))}
      </StyledContainer>
   )
}

export default ImagePreview
