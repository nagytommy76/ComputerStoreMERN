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
               <StyledRightSection>{compare.displayName}</StyledRightSection>
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
   padding: '.15rem',
   margin: '.45rem 0',
   height: '75px',

   display: 'flex',
   border: '2px solid rgba(0,0,0, .2)',
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
