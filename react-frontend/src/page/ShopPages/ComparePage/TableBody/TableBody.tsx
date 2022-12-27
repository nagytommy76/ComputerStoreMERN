import React from 'react'
import { VgaDetailProperties } from '../CompareTypes'
import { ConvertedVGADetailsType } from '../Hooks/Types'

import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
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
                  <TableCell>{keyValuePair[1]}</TableCell>
                  {convertedProductDetails.map((details, index) => {
                     return keyValuePair[0] !== 'manufacturerPageUrl' ? (
                        <TableCell key={index}>{details[keyValuePair[0]]}</TableCell>
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
