import { useAppDispatch } from '../../../../../app/hooks'
import { removeSingleItemByID } from '../../../../../app/slices/ProductCompareSlice'
import { styled } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const RemoveProduct: React.FC<{ productID: string }> = ({ productID }) => {
   const dispatch = useAppDispatch()
   const handleItemDelete = () => {
      console.log('Törlés')
      dispatch(removeSingleItemByID(productID))
   }

   return (
      <StyledIconBtn onClick={handleItemDelete} color='error' aria-label='delete'>
         <DeleteIcon />
      </StyledIconBtn>
   )
}

export default RemoveProduct

const StyledIconBtn = styled(IconButton)({
   position: 'absolute',
   padding: 0.5,
   right: 0,
   top: 0,
})
