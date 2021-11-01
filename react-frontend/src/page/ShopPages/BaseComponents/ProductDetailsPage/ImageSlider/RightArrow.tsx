import React from 'react'
import { useLocation } from 'react-router'
import { LocationType } from '../../../BaseTypes'
import { RightArrow as RightArrowStyle } from './SliderStyle'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const RightArrow: React.FC<{ nextImage: () => void; currentPic: number }> = ({ nextImage, currentPic }) => {
   let location = useLocation<LocationType>()
   const { pictureUrls } = location.state
   return (
      <RightArrowStyle>
         <Tooltip arrow title={`Következő: ${currentPic + 1} / ${pictureUrls.length}`} placement='left'>
            <IconButton onClick={nextImage} color='primary' size='large'>
               <ArrowForwardIosIcon fontSize='large' color='primary' />
            </IconButton>
         </Tooltip>
      </RightArrowStyle>
   )
}

export default RightArrow
