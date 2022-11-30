import React from 'react'
import { styled } from '@mui/material'
import { useAppSelector } from '../../../../../../app/hooks'
import PopoverDialog from './PopoverDialog'

import Fab from '@mui/material/Fab'
import Popover from '@mui/material/Popover'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

const Compare = () => {
   const compareLength = useAppSelector(state => state.productCompare.productIdsToComare.length) || 0
   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
   const open = Boolean(anchorEl)

   const handleClickEvent = () => {
      console.log('Átírányít a compare page-re')
   }
   const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClosePopover = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <Fab
            onClick={handleClickEvent}
            aria-haspopup='true'
            aria-owns={open ? 'mouse-over-popover' : undefined}
            onMouseEnter={handleOpenPopover}
            // onMouseLeave={handleClosePopover}
            color='info'
            variant='extended'
            sx={{ zIndex: 3, position: 'fixed', right: '50px', bottom: 150 }}
         >
            <StyledCompareCount>{compareLength}</StyledCompareCount>
            <CompareArrowsIcon />
         </Fab>
         <Popover
            id='mouse-over-popover'
            open={open}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            disableRestoreFocus
            sx={{
               pointerEvents: 'none',
            }}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
            }}
            transformOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
            }}
         >
            {/* Ide kéne megjeleníteni a termék nevet egy képpel */}
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
