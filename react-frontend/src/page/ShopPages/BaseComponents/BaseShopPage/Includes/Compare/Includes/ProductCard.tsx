import { useAppSelector, useAppDispatch } from '../../../../../../../app/hooks'
import { removeSingleItemByID } from '../../../../../../../app/slices/ProductCompareSlice'

import { styled } from '@mui/material'
import { TransitionGroup } from 'react-transition-group'
import Collapse from '@mui/material/Collapse'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

const ProductCard = () => {
   const dispatch = useAppDispatch()
   const selectedCompareProducts = useAppSelector(state => state.productCompare.selectedProductsByType)

   const handleItemDelete = (productID: string) => {
      dispatch(removeSingleItemByID(productID))
   }

   return (
      <TransitionGroup>
         {selectedCompareProducts.map(compare => (
            <Collapse timeout={200} key={compare.productId}>
               <StyledProductCard>
                  <StyledImage src={compare.displayImage} alt={compare.displayImage} />
                  <StyledRightSection>
                     {compare.displayName}
                     <IconButton
                        onClick={() => handleItemDelete(compare.productId)}
                        color='error'
                        aria-label='delete'
                     >
                        <DeleteIcon />
                     </IconButton>
                  </StyledRightSection>
               </StyledProductCard>
            </Collapse>
         ))}
      </TransitionGroup>
   )
}

export default ProductCard

const StyledProductCard = styled('div')({
   width: '100%',
   margin: '.45rem 0',
   height: '95px',

   display: 'flex',
   alignItems: 'center',
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
   display: 'flex',
})