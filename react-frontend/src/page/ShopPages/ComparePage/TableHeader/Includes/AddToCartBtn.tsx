import React from 'react'
import { useAppDispatch } from '../../../../../app/hooks'
import { sendCartItemToSaveInDB } from '../../../../../app/slices/CartSlice'
import { ToSaveCartItems } from '../../../BaseComponents/ProductCard/Hook/useAddToCompare'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Button from '@mui/material/Button'

const AddToCartBtn: React.FC<{ toSaveCartItems: ToSaveCartItems }> = ({ toSaveCartItems }) => {
   const dispatch = useAppDispatch()
   const addItemToCart = () => {
      dispatch(sendCartItemToSaveInDB(toSaveCartItems))
   }

   return (
      <Button
         fullWidth
         onClick={addItemToCart}
         variant='outlined'
         color='success'
         size='large'
         endIcon={<AddShoppingCartIcon />}>
         Kosárba
      </Button>
   )
}

export default AddToCartBtn
