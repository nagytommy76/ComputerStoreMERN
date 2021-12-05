import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import axios from 'axios'
import { ProductToDeleteType, SnackbarStateTypes } from './Types'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const ConfirmDialog = React.lazy(() => import('./ConfirmDialog'))

const DeleteButton: React.FC<{
   productID: string
   productTypeForURL: string
   setAllProducts: React.Dispatch<React.SetStateAction<ProductToDeleteType[]>>
   allProducts: ProductToDeleteType[]
   productNameForSnackbar: string
   setIsSnackOpen: React.Dispatch<React.SetStateAction<SnackbarStateTypes>>
}> = ({ productID, productTypeForURL, setAllProducts, allProducts, setIsSnackOpen, productNameForSnackbar }) => {
   const [isDialogOpen, setIsDialogOpen] = useState(false)

   const handleDialogClickOpen = async () => setIsDialogOpen(true)

   const handleCancelButtonClick = () => setIsDialogOpen(false)

   const handleConfirmButtonClick = async () => {
      try {
         const deleteSuccessResponse = await axios.delete(`admin/${productTypeForURL}/delete`, { data: { productID } })
         if (deleteSuccessResponse.status === 200 && deleteSuccessResponse.data.deleted) {
            const productsWithoutDeletedItem = allProducts.filter((product) => productID !== product._id)
            setIsSnackOpen((prevValues) => {
               return { ...prevValues, isOpen: true, deletedProductName: productNameForSnackbar }
            })
            setIsDialogOpen(false)
            setAllProducts(productsWithoutDeletedItem)
         }
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <>
         <IconButton color='error' onClick={handleDialogClickOpen}>
            <DeleteIcon />
         </IconButton>
         {createPortal(
            <ConfirmDialog
               isDialogOpen={isDialogOpen}
               handleCancelButtonClick={handleCancelButtonClick}
               handleConfirmButtonClick={handleConfirmButtonClick}
               productNameForSnackbar={productNameForSnackbar}
            />,
            document.getElementById('delete-dialog') as HTMLElement
         )}
      </>
   )
}

export default DeleteButton
