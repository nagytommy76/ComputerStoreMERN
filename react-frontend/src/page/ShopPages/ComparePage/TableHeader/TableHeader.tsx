import React from 'react'
import { HeaderTypes } from '../CompareTypes'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TableHeader: React.FC<{ compareProducts: HeaderTypes[] }> = ({ compareProducts }) => {
   return (
      <TableHead>
         <TableRow>
            <TableCell>Ide majd kitalálom mi legyen</TableCell>
            {compareProducts.map(product => (
               <TableCell key={product.productID} align='left'>
                  {product.productDisplayName}
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   )
}

export default TableHeader
