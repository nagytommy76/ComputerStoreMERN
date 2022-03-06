import React from 'react'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { RightArrow as RightArrowStyle } from './SliderStyle'

const RightArrow: React.FC<{ nextImage: () => void; currentPic: number; pictureUrlsLength: number }> = ({
   nextImage,
   currentPic,
   pictureUrlsLength,
}) => {
   return (
      <RightArrowStyle>
         <Tooltip arrow title={`Következő: ${currentPic + 1} / ${pictureUrlsLength}`} placement='left'>
            <IconButton onClick={nextImage} color='primary' size='large'>
               <ArrowForwardIosIcon fontSize='large' color='primary' />
            </IconButton>
         </Tooltip>
      </RightArrowStyle>
   )
}

export default RightArrow
