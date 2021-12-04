import React from 'react'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'

const TableHeadSection = React.lazy(() => import('./TableHead'))

const BaseTable: React.FC<{
   detailedProductLength: number
   rowsPerPage: number
   currentPage: number
   handleChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => void
   handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}> = ({ children, detailedProductLength, rowsPerPage, currentPage, handleChangePage, handleChangeRowsPerPage }) => {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 750, minHeight: 130 }}>
            <caption>Termékek törlése</caption>
            <TableHeadSection />
            {children}
            <TableFooter>
               <TableRow>
                  <TablePagination
                     rowsPerPageOptions={[10, 25, 50, { label: 'Összes', value: -1 }]}
                     colSpan={6}
                     count={detailedProductLength}
                     rowsPerPage={rowsPerPage}
                     page={currentPage}
                     onPageChange={handleChangePage}
                     onRowsPerPageChange={handleChangeRowsPerPage}
                     SelectProps={{
                        native: true
                     }}
                  />
               </TableRow>
            </TableFooter>
         </Table>
      </TableContainer>
   )
}

export default BaseTable
