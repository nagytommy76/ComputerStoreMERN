import React from 'react'
import { useAppSelector } from '../../../../../../app/hooks'
import useCompareBtn from './Hooks/useCompareBtn'

import { StyledCompareCount, StyledFab } from './Styles/CompareBtnStyle'
import PopoverDialog from './PopoverDialog'
import Popover from '@mui/material/Popover'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import Fade from '@mui/material/Fade'

const Compare: React.FC<{ pageProductType: string }> = ({ pageProductType }) => {
   const compareSelectedLength =
      useAppSelector(state => state.productCompare.selectedProductsByType.length) || 0
   const { anchorOpened, handleClosePopover, handleOpenPopover, isDispalyed, popoverAnchor } =
      useCompareBtn(pageProductType)

   return (
      <Fade unmountOnExit mountOnEnter in={isDispalyed}>
         <div>
            <StyledFab
               ref={popoverAnchor}
               aria-haspopup='true'
               aria-owns='mouse-over-popover'
               onMouseEnter={handleOpenPopover}
               color='info'
               variant='extended'
            >
               <StyledCompareCount>{compareSelectedLength}</StyledCompareCount>
               <CompareArrowsIcon />
            </StyledFab>
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
         </div>
      </Fade>
   )
}

export default Compare
