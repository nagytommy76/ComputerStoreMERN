import React from 'react'
import { styled } from '@mui/material'
import ProductCard from './Includes/ProductCard'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import Button from '@mui/material/Button'

const PopoverDialog = () => {
   const handleClickEvent = () => {
      console.log('Átírányít a compare page-re')
   }

   return (
      <StyledContainer>
         <ProductCard />
         <Button
            onClick={handleClickEvent}
            variant='contained'
            color='info'
            endIcon={<KeyboardDoubleArrowRightIcon />}
         >
            Összehasonlítás
         </Button>
      </StyledContainer>
   )
}

export default PopoverDialog

const StyledContainer = styled('div')({
   width: '310px',
   minHeight: '450px',
   overflow: 'unset',
   margin: '.75rem',
})
