import React from 'react'

import TableCell from '@mui/material/TableCell'

const ManufacturerAnchor: React.FC<{ pageURL: string }> = ({ pageURL }) => {
   return (
      <TableCell>
         <a target='_blank' href={pageURL}>
            Gyártó honlap
         </a>
      </TableCell>
   )
}

export default ManufacturerAnchor
