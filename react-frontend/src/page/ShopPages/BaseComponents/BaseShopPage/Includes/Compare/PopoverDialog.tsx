import React from 'react'
import { styled } from '@mui/material'
import { useAppSelector } from '../../../../../../app/hooks'

const PopoverDialog = () => {
   const compareProducts = useAppSelector(state => state.productCompare.productIdsToComare)

   return (
      <StyledContainer>
         {compareProducts.map(compare => (
            <StyledProductCard key={compare.productId}>
               <StyledImage src={compare.displayImage} alt={compare.displayImage} />
               <span>{compare.displayName}</span>
            </StyledProductCard>
         ))}
      </StyledContainer>
   )
}

export default PopoverDialog

const StyledContainer = styled('div')({
   width: '300px',
   height: '350px',
   margin: '1rem',
   padding: 0,
})

const StyledProductCard = styled('div')({
   width: '100%',
   display: 'flex',
   border: '1px solid rgba(0,0,0, .2)',
   margin: '.75rem 0',
   padding: '.15rem',
   height: '70px',
})

const StyledImage = styled('img')({})
