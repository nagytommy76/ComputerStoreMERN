import { useAppDispatch } from '../../../../../app/hooks'
import { removeSingleItemByID } from '../../../../../app/slices/ProductCompareSlice'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const RemoveProduct: React.FC<{ productID: string }> = ({ productID }) => {
   const dispatch = useAppDispatch()
   const handleItemDelete = () => {
      console.log('Törlés')
      dispatch(removeSingleItemByID(productID))
   }

   return (
      <IconButton onClick={handleItemDelete} color='error' aria-label='delete'>
         <DeleteIcon />
      </IconButton>
   )
}

export default RemoveProduct
