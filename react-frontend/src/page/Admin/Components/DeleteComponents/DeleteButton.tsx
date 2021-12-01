import React from 'react'
import axios from 'axios'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteButton: React.FC<{
   productID: string
   productTypeForURL: string
   setAllProducts: React.Dispatch<
      React.SetStateAction<
         {
            _id: string
            manufacturer: string
            type: string
            price: number
            inStockQuantity: number
         }[]
      >
   >
   allProducts: {
      _id: string
      manufacturer: string
      type: string
      price: number
      inStockQuantity: number
   }[]
}> = ({ productID, productTypeForURL, setAllProducts, allProducts }) => {
   const handleDeleteProduct = async () => {
      const deleteSuccessResponse = await axios.delete(`admin/${productTypeForURL}/delete`, { data: { productID } })
      if (deleteSuccessResponse.status === 200 && deleteSuccessResponse.data.deleted) {
         const productsWithoutDeletedItem = allProducts.filter((product) => productID !== product._id)
         setAllProducts(productsWithoutDeletedItem)
      }
   }
   return (
      <IconButton color='error' onClick={handleDeleteProduct}>
         <DeleteIcon />
      </IconButton>
   )
}

export default DeleteButton
