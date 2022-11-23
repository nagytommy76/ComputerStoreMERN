import React from 'react'
import { styled } from '@mui/material'
import Fab from '@mui/material/Fab'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import { useAppSelector } from '../../../../../app/hooks'

const Compare = () => {
   const compareLength = useAppSelector(state => state.productCompare.productIdsToComare.length) || 0
   return (
      <Fab color='info' variant='extended' sx={{ zIndex: 3, position: 'fixed', right: '50px', bottom: 150 }}>
         <StyledCompareCount>{compareLength}</StyledCompareCount>
         <CompareArrowsIcon />
      </Fab>
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
