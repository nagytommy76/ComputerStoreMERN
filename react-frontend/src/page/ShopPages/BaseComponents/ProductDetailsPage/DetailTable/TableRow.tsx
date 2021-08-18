import React from 'react'
import { TableRows, TableDataTitle } from './TableStyle'

const TableRow: React.FC<{ property?: string | number; unit?: string }> = ({ children, property, unit }) => {
   return (
      <TableRows>
         <TableDataTitle>{children}</TableDataTitle>
         <td>
            {property} {unit}
         </td>
      </TableRows>
   )
}

export default TableRow
