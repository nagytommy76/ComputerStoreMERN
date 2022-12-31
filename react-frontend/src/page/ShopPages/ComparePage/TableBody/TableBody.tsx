import React from 'react'
import { VgaDetailProperties, CpuDetailProperties } from '../CompareTypes'
import { ConvertedCPUDetailsType, ConvertedVGADetailsType } from '../Hooks/Types'
import { useAppSelector } from '../../../../app/hooks'

import { StyledTableCell } from '../Styles/TableBodyStyle'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'

import ManufacturerAnchor from './ManufacturerAnchor'

const TableBodyComponent: React.FC<{
   convertedProductDetails: ConvertedVGADetailsType[] | ConvertedCPUDetailsType[]
}> = ({ convertedProductDetails }) => {
   const productType = useAppSelector((state) => state.productCompare.currentSelectedProductType)
   const Empty: {
      [key: string]: any
      vga: typeof VgaDetailProperties
      cpu: typeof CpuDetailProperties
   } = {
      vga: VgaDetailProperties,
      cpu: CpuDetailProperties,
   }
   return (
      <TableBody>
         {Object.entries(Empty[productType]).map((keyValuePair, index) => (
            <TableRow hover key={index}>
               <>
                  <StyledTableCell>{keyValuePair[1] as string}</StyledTableCell>
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
