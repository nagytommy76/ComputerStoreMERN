import React from 'react'
import { styled } from '@mui/material'
import { useAppSelector } from '../../../../../app/hooks'

import Fab from '@mui/material/Fab'
import Popover from '@mui/material/Popover'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

const Compare = () => {
   const compareLength = useAppSelector(state => state.productCompare.productIdsToComare.length) || 0
   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
   const open = Boolean(anchorEl)
   const id = open ? 'simple-popover' : undefined

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <Fab
            onClick={handleClick}
            color='info'
            variant='extended'
            sx={{ zIndex: 3, position: 'fixed', right: '50px', bottom: 150 }}
         >
            <StyledCompareCount>{compareLength}</StyledCompareCount>
            <CompareArrowsIcon />
         </Fab>
         <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
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
            <div>semmi</div>
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
