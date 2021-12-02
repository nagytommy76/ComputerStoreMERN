import React from 'react'
import axios from 'axios'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { ProductToDeleteType } from './Types'

const DeleteButton: React.FC<{
   productID: string
   productTypeForURL: string
   setAllProducts: React.Dispatch<React.SetStateAction<ProductToDeleteType[]>>
   allProducts: ProductToDeleteType[]
}> = ({ productID, productTypeForURL, setAllProducts, allProducts }) => {
   const handleDeleteProduct = async () => {
      try {
         const deleteSuccessResponse = await axios.delete(`admin/${productTypeForURL}/delete`, { data: { productID } })
         if (deleteSuccessResponse.status === 200 && deleteSuccessResponse.data.deleted) {
            const productsWithoutDeletedItem = allProducts.filter((product) => productID !== product._id)
            setAllProducts(productsWithoutDeletedItem)
         }
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <IconButton color='error' onClick={handleDeleteProduct}>
         <DeleteIcon />
      </IconButton>
   )
}

export default DeleteButton
