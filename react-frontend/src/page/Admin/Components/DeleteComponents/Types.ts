export type ProductToDeleteType = {
   _id: string
   manufacturer: string
   type: string
   price: number
   inStockQuantity: number
}

export type SnackbarStateTypes = {
   isOpen: boolean
   deletedProductName: string
}
