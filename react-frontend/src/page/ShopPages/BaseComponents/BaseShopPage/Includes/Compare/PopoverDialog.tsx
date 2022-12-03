import React from 'react'
import { styled } from '@mui/material'
import { useAppSelector } from '../../../../../../app/hooks'

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import Button from '@mui/material/Button'

import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

const PopoverDialog = () => {
   const compareProducts = useAppSelector(state => state.productCompare.productIdsToComare)

   const handleItemDelete = (productID: string) => {
      console.log('Eltávolítom a terméket... ' + productID)
   }

   const handleClickEvent = () => {
      console.log('Átírányít a compare page-re')
   }

   return (
      <StyledContainer>
         {compareProducts.map(compare => (
            <StyledProductCard key={compare.productId}>
               <StyledImage src={compare.displayImage} alt={compare.displayImage} />
               <StyledRightSection>{compare.displayName}</StyledRightSection>
               <IconButton
                  onClick={() => handleItemDelete(compare.productId)}
                  color='error'
                  aria-label='delete'
               >
                  <DeleteIcon />
               </IconButton>
            </StyledProductCard>
         ))}
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
   height: '370px',
   margin: '.75rem',
})

const StyledProductCard = styled('div')({
   width: '100%',
   margin: '.45rem 0',
   height: '75px',

   display: 'flex',
   border: '1px solid rgba(0,0,0, .2)',
   borderRadius: '5px',
})

const StyledImage = styled('img')({
   objectFit: 'contain',
   width: '30%',
})

const StyledRightSection = styled('span')({
   fontSize: '.9rem',
   width: '70%',
})
