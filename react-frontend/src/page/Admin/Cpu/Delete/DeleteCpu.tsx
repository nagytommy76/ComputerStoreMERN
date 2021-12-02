import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import { ProductToDeleteType } from '../../Components/DeleteComponents/Types'

const DeleteButton = React.lazy(() => import('../../Components/DeleteComponents/DeleteButton'))
const SingleTableRow = React.lazy(() => import('../../Components/DeleteComponents/SingleTableRow'))
const BaseTable = React.lazy(() => import('../../Components/DeleteComponents/BaseTable'))

const DeleteCpu = () => {
   const [allDetailedProduct, setAllDetaildeProduct] = useState<ProductToDeleteType[]>([])
   const [currentPage, setCurrentPage] = useState<number>(0)
   const [rowsPerPage, setRowsPerPage] = useState<number>(5)

   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setCurrentPage(newPage)
   }

   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10))
      setCurrentPage(0)
   }

   //    https://mui.com/components/data-grid/getting-started/
   useEffect(() => {
      axios
         .get('admin/cpu/get-to-delete')
         .then((allCpu) => {
            if (allCpu.status === 200) setAllDetaildeProduct(allCpu.data.allProducts)
         })
         .catch((error) => console.log(error))
   }, [])

   return (
      <BaseTable>
         <TableBody>
            {allDetailedProduct.map((product) => (
               <SingleTableRow product={product} key={product._id}>
                  <DeleteButton
                     allProducts={allDetailedProduct}
                     setAllProducts={setAllDetaildeProduct}
                     productTypeForURL='cpu'
                     productID={product._id}
                  />
               </SingleTableRow>
            ))}
         </TableBody>
         <TableFooter>
            <TableRow>
               <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'Összes', value: -1 }]}
                  colSpan={6}
                  count={allDetailedProduct.length}
                  rowsPerPage={rowsPerPage}
                  page={currentPage}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  SelectProps={{
                     inputProps: {
                        'aria-label': 'rows per page'
                     },
                     native: true
                  }}
               />
            </TableRow>
         </TableFooter>
      </BaseTable>
   )
}

export default DeleteCpu
