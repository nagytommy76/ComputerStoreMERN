import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import axios from 'axios'
import { ProductToDeleteType, SnackbarStateTypes } from './Types'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const DeleteButton: React.FC<{
   productID: string
   productTypeForURL: string
   setAllProducts: React.Dispatch<React.SetStateAction<ProductToDeleteType[]>>
   allProducts: ProductToDeleteType[]
   productNameForSnackbar: string
   setIsSnackOpen: React.Dispatch<React.SetStateAction<SnackbarStateTypes>>
}> = ({ productID, productTypeForURL, setAllProducts, allProducts, setIsSnackOpen, productNameForSnackbar }) => {
   const [isDialogOpen, setIsDialogOpen] = useState(true)

   const handleClickOpen = () => {
      setIsDialogOpen(true)
   }

   const handleClose = () => {
      setIsDialogOpen(false)
   }

   const handleDeleteProduct = async () => {
      try {
         const deleteSuccessResponse = await axios.delete(`admin/${productTypeForURL}/delete`, { data: { productID } })
         if (deleteSuccessResponse.status === 200 && deleteSuccessResponse.data.deleted) {
            const productsWithoutDeletedItem = allProducts.filter((product) => productID !== product._id)
            setAllProducts(productsWithoutDeletedItem)
            setIsSnackOpen((prevValues) => {
               return { ...prevValues, isOpen: true, deletedProductName: productNameForSnackbar }
            })
         }
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <>
         <IconButton color='error' onClick={handleDeleteProduct}>
            <DeleteIcon />
         </IconButton>
         {createPortal(
            <Dialog open={isDialogOpen} onClose={handleClose}>
               <DialogTitle id='alert-dialog-title'>Biztosan törlöd?</DialogTitle>
               <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                     Biztosan törölni szeretnéd a(z) {productNameForSnackbar} terméket véglegesen az adatbázisból?
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={handleClose}>Mégsem</Button>
                  <Button onClick={handleClose} autoFocus>
                     Biztosan
                  </Button>
               </DialogActions>
            </Dialog>,
            document.getElementById('delete-dialog') as HTMLElement
         )}
      </>
   )
}

export default DeleteButton
