import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import useDeleteProduct from '../../Hooks/GetDeleteProduct'
import usePaginate from '../../Hooks/Paginate'

import { SnackbarStateTypes } from './Types'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'

const TableHeadSection = React.lazy(() => import('./TableHead'))
const SingleTableRow = React.lazy(() => import('./SingleTableRow'))
const DeleteButton = React.lazy(() => import('./DeleteButton'))
const SnackBar = React.lazy(() => import('./SnackBar'))

const BaseTable: React.FC<{
   productType: string
}> = ({ productType }) => {
   const [isSnackOpen, setIsSnackOpen] = useState<SnackbarStateTypes>({
      isOpen: false,
      deletedProductName: '',
   })
   const { setAllDetailedProduct, allDetailedProduct } = useDeleteProduct(productType)
   const { rowsPerPage, currentPage, handleChangePage, handleChangeRowsPerPage } = usePaginate()

   return (
      <>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750, minHeight: 130 }}>
               <caption>Termékek törlése</caption>
               <TableHeadSection />
               <TableBody>
                  {(rowsPerPage > 0
                     ? allDetailedProduct.slice(
                          currentPage * rowsPerPage,
                          currentPage * rowsPerPage + rowsPerPage
                       )
                     : allDetailedProduct
                  ).map(product => (
                     <SingleTableRow product={product} key={product._id}>
                        <DeleteButton
                           nameForSnackbar={product.type}
                           setIsSnackOpen={setIsSnackOpen}
                           allToDelete={allDetailedProduct}
                           setAllToDelete={setAllDetailedProduct}
                           productTypeForURL={productType}
                           toDeleteID={product._id}
                        />
                     </SingleTableRow>
                  ))}
               </TableBody>
               <TableFooter>
                  <TableRow>
                     <TablePagination
                        rowsPerPageOptions={[10, 25, 50, { label: 'Összes', value: -1 }]}
                        colSpan={6}
                        count={allDetailedProduct.length}
                        rowsPerPage={rowsPerPage}
                        page={currentPage}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        SelectProps={{
                           native: true,
                        }}
                     />
                  </TableRow>
               </TableFooter>
            </Table>
         </TableContainer>
         {createPortal(
            <SnackBar isSnackOpen={isSnackOpen} setIsSnackOpen={setIsSnackOpen} />,
            document.getElementById('delete-snackbar') as HTMLElement
         )}
      </>
   )
}

export default BaseTable
