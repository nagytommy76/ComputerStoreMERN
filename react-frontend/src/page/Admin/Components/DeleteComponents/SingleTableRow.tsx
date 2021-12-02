import React from 'react'
import NumberFormat from 'react-number-format'
import { ProductToDeleteType } from './Types'

import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const SingleTableRow: React.FC<{ product: ProductToDeleteType }> = ({ product, children }) => {
   return (
      <TableRow hover key={product._id}>
         <TableCell component='th'>{product._id}</TableCell>
         <TableCell>{product.manufacturer}</TableCell>
         <TableCell>{product.type}</TableCell>
         <TableCell>
            <NumberFormat thousandSeparator=' ' value={product.price} suffix=' Ft' displayType='text' />
         </TableCell>
         <TableCell>{product.inStockQuantity} (db)</TableCell>
         <TableCell>{children}</TableCell>
      </TableRow>
   )
}

export default SingleTableRow
