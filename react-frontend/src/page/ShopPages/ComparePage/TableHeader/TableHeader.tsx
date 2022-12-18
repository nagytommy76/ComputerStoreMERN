import React from 'react'
import { BaseProductType } from '../../BaseTypes'

import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const TableHeader: React.FC<{ compareProducts: BaseProductType[] }> = ({ compareProducts }) => {
   return (
      <TableHead>
         <TableRow>
            <TableCell>Ide majd kitalálom mi legyen</TableCell>
            {compareProducts.map(product => (
               <TableCell key={product._id} align='left'>
                  {product.manufacturer} {product.type}
               </TableCell>
            ))}
         </TableRow>
      </TableHead>
   )
}

export default TableHeader
