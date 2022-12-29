import React from 'react'

import LaunchIcon from '@mui/icons-material/Launch'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { StyledTableCell } from '../Styles/TableBodyStyle'

const ManufacturerAnchor: React.FC<{ pageURL: string }> = ({ pageURL }) => {
   return (
      <StyledTableCell>
         <Link underline='none' target='_blank' href={pageURL}>
            <Button variant='text' color='info' endIcon={<LaunchIcon />}>
               Gyártó honlapja
            </Button>
         </Link>
      </StyledTableCell>
   )
}

export default ManufacturerAnchor
