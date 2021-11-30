import React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

const TableHeadSection = React.lazy(() => import('./TableHead'))

const BaseTable: React.FC = ({ children }) => {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 750, minHeight: 130 }}>
            <caption>Termékek törlése</caption>
            <TableHeadSection />
            <TableBody>{children}</TableBody>
         </Table>
      </TableContainer>
   )
}

export default BaseTable
