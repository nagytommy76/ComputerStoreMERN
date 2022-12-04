import React, { useState, useRef, useEffect } from 'react'
import { styled } from '@mui/material'
import { useAppSelector } from '../../../../../../app/hooks'
import PopoverDialog from './PopoverDialog'

import Fab from '@mui/material/Fab'
import Popover from '@mui/material/Popover'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

const Compare = () => {
   const compareLength = useAppSelector(state => state.productCompare.productIdsToComare.length) || 0
   const [anchorOpened, setAnchorOpened] = useState<boolean>(false)
   const [isDispalyed, setIsDisplayed] = useState<boolean>(false)
   const popoverAnchor = useRef(null)

   useEffect(() => {
      if (compareLength === 0) setIsDisplayed(false)
      else setIsDisplayed(true)
   }, [compareLength])

   const handleOpenPopover = () => {
      setAnchorOpened(true)
   }
   const handleClosePopover = () => {
      setAnchorOpened(false)
   }

   return !isDispalyed ? null : (
      <>
         <Fab
            ref={popoverAnchor}
            aria-haspopup='true'
            aria-owns='mouse-over-popover'
            onMouseEnter={handleOpenPopover}
            color='info'
            variant='extended'
            sx={{ zIndex: 3, position: 'fixed', right: '50px', bottom: 150 }}
         >
            <StyledCompareCount>{compareLength}</StyledCompareCount>
            <CompareArrowsIcon />
         </Fab>
         <Popover
            onClose={handleClosePopover}
            onMouseLeave={handleClosePopover}
            open={anchorOpened}
            anchorEl={popoverAnchor.current}
            disableRestoreFocus
            sx={{ zIndex: 3 }}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'center',
               horizontal: 'right',
            }}
         >
            <PopoverDialog />
         </Popover>
      </>
   )
}

export default Compare

const StyledCompareCount = styled('span')({
   width: 25,
   height: 25,
   marginRight: 10,

   background: 'red',
   borderRadius: '50%',
})
