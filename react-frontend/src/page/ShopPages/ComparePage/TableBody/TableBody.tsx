import React from 'react'
import { VgaDetailProperties } from '../CompareTypes'
import { ConvertedVGADetailsType } from '../Hooks/Types'

import { StyledTableCell } from '../Styles/TableBodyStyle'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'

import ManufacturerAnchor from './ManufacturerAnchor'

const TableBodyComponent: React.FC<{ convertedProductDetails: ConvertedVGADetailsType[] }> = ({
   convertedProductDetails,
}) => {
   return (
      <TableBody>
         {Object.entries(VgaDetailProperties).map((keyValuePair, index) => (
            <TableRow hover key={index}>
               <>
                  <StyledTableCell>{keyValuePair[1]}</StyledTableCell>
                  {convertedProductDetails.map((details, index) => {
                     return keyValuePair[0] !== 'manufacturerPageUrl' ? (
                        <StyledTableCell key={index}>{details[keyValuePair[0]]}</StyledTableCell>
                     ) : (
                        <ManufacturerAnchor pageURL={details[keyValuePair[0]]} key={index} />
                     )
                  })}
               </>
            </TableRow>
         ))}
      </TableBody>
   )
}

export default TableBodyComponent
