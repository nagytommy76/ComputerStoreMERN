import { useAppSelector, useAppDispatch } from '../../../../../../../app/hooks'
import { removeSingleItemByID } from '../../../../../../../app/slices/ProductCompareSlice'

import { StyledImage, StyledProductCard, StyledRightSection } from './ProductCardStyle'
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
