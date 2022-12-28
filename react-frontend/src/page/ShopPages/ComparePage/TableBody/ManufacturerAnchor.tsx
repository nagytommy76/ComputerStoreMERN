import React from 'react'

import LaunchIcon from '@mui/icons-material/Launch'
import TableCell from '@mui/material/TableCell'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

const ManufacturerAnchor: React.FC<{ pageURL: string }> = ({ pageURL }) => {
   return (
      <TableCell>
         <Link underline='none' target='_blank' href={pageURL}>
            <Button variant='text' color='info' endIcon={<LaunchIcon />}>
               Gyártó honlapja
            </Button>
         </Link>
      </TableCell>
   )
}

export default ManufacturerAnchor
