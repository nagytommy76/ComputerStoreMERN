import React, { useState } from 'react'
import useDeleteProduct from '../../Hooks/GetDeleteProduct'
import usePaginate from '../../Hooks/Paginate'

import { SnackbarStateTypes } from '../../Components/DeleteComponents/Types'

import TableBody from '@mui/material/TableBody'

const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))
const SingleTableRow = React.lazy(() => import('../../Components/DeleteComponents/SingleTableRow'))
const DeleteButton = React.lazy(() => import('../../Components/DeleteComponents/DeleteButton'))
const SnackBar = React.lazy(() => import('../../Components/DeleteComponents/SnackBar'))

const DeleteVga = () => {
   const { setAllDetailedProduct, allDetailedProduct } = useDeleteProduct('vga')
   const { rowsPerPage, currentPage, handleChangePage, handleChangeRowsPerPage } = usePaginate()
   const [isSnackOpen, setIsSnackOpen] = useState<SnackbarStateTypes>({ isOpen: false, deletedProductName: '' })

   return (
      <>
         <BaseTable
            currentPage={currentPage}
            detailedProductLength={allDetailedProduct.length}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}>
            <TableBody>
               {(rowsPerPage > 0
                  ? allDetailedProduct.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                  : allDetailedProduct
               ).map((product) => (
                  <SingleTableRow product={product} key={product._id}>
                     <DeleteButton
                        productNameForSnackbar={product.type}
                        setIsSnackOpen={setIsSnackOpen}
                        allProducts={allDetailedProduct}
                        setAllProducts={setAllDetailedProduct}
                        productTypeForURL='cpu'
                        productID={product._id}
                     />
                  </SingleTableRow>
               ))}
            </TableBody>
         </BaseTable>
         <SnackBar isSnackOpen={isSnackOpen} setIsSnackOpen={setIsSnackOpen} />
      </>
   )
}

export default DeleteVga
