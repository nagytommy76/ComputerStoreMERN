import React from 'react'

import { LeftArrow as LeftArrowStyle } from './SliderStyle'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos'

const LeftArrow: React.FC<{ previousImage: () => void; currentPic: number; pictureUrlsLength: number }> = ({
   previousImage,
   currentPic,
   pictureUrlsLength,
}) => {
   return (
      <LeftArrowStyle>
         <Tooltip arrow title={`Előző: ${currentPic + 1} / ${pictureUrlsLength}`} placement='right'>
            <IconButton onClick={previousImage} color='primary' size='large'>
               <ArrowBackIosNewIcon fontSize='large' color='primary' />
            </IconButton>
         </Tooltip>
      </LeftArrowStyle>
   )
}

export default LeftArrow
