import React from 'react'

import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

const TableHeader = () => {
   return (
      <TableHead>
         <TableRow>
            <TableCell>Email cím</TableCell>
            <TableCell align='right'>Felhasználónév</TableCell>
            <TableCell align='right'>Email regisztrálva?</TableCell>
            <TableCell align='right'>Admin?</TableCell>
            <TableCell align='right'>Törlés</TableCell>
         </TableRow>
      </TableHead>
   )
}

export default TableHeader
