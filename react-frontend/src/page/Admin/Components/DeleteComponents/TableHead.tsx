import React from 'react'

import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const TableHeadSection = () => {
   return (
      <TableHead>
         <TableRow>
            <TableCell>Termék ID</TableCell>
            <TableCell>Gyártó</TableCell>
            <TableCell>Típus</TableCell>
            <TableCell>Ár</TableCell>
            <TableCell>Raktáron</TableCell>
            <TableCell>Törlés</TableCell>
         </TableRow>
      </TableHead>
   )
}

export default TableHeadSection
