import React from 'react'
import usePaginate from '../../Hooks/Paginate'

import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'

const Footer: React.FC<{ dataLength: number }> = ({ dataLength }) => {
   const { rowsPerPage, currentPage, handleChangePage, handleChangeRowsPerPage } = usePaginate()

   return (
      <TableFooter>
         <TableRow>
            <TablePagination
               rowsPerPageOptions={[10, 25, 50, { label: 'Összes', value: -1 }]}
               colSpan={6}
               count={dataLength}
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
   )
}

export default Footer
