import React, { useState } from 'react'
import { axiosInstance } from '../../../AxiosSetup/AxiosInstance'
import { SnackbarStateTypes } from '../Components/DeleteComponents/Types'

const DeleteButtonHook = (
   productTypeForURL: string,
   toDeleteID: string,
   allToDelete: any[],
   setAllToDelete: React.Dispatch<React.SetStateAction<any[]>>,
   setIsSnackOpen: React.Dispatch<React.SetStateAction<SnackbarStateTypes>>,
   nameForSnackbar: string
) => {
   const [isDialogOpen, setIsDialogOpen] = useState(false)

   const handleDialogClickOpen = () => setIsDialogOpen(true)

   const handleCancelButtonClick = () => setIsDialogOpen(false)

   const handleConfirmButtonClick = async () => {
      try {
         const deleteSuccessResponse = await axiosInstance.delete(`admin/${productTypeForURL}/delete`, {
            data: { _id: toDeleteID },
         })
         if (deleteSuccessResponse.status === 200 && deleteSuccessResponse.data.deleted) {
            const productsWithoutDeletedItem = allToDelete.filter(deleted => deleted._id !== toDeleteID)
            setIsSnackOpen(prevValues => {
               return { ...prevValues, isOpen: true, deletedProductName: nameForSnackbar }
            })
            setIsDialogOpen(false)
            setAllToDelete(productsWithoutDeletedItem)
         }
      } catch (error) {
         console.log(error)
      }
   }
   return {
      handleDialogClickOpen,
      handleCancelButtonClick,
      handleConfirmButtonClick,
      isDialogOpen,
   }
}

export default DeleteButtonHook
