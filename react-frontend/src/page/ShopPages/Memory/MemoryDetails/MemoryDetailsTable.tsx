import React, { useContext } from 'react'
import DetailsContext from '../../Context/DetailsContext'
import { TableStyle } from '../../BaseComponents/ProductDetailsPage/DetailTable/TableStyle'
import { MemoryDetailsType } from '../MemoryTypes'

const TableRow = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/DetailTable/TableRow'))

const MemoryDetailsTable = () => {
   const { details }: { details: MemoryDetailsType } = useContext(DetailsContext)
   return (
      <TableStyle>
         <tbody>
            <TableRow property={details.warranity} unit='Hónap'>
               Garancia:
            </TableRow>
            <TableRow property={details.capacity} unit='GB'>
               Kapacitás:
            </TableRow>
            <TableRow property={details.memoryType}>Memória típusa:</TableRow>
            <TableRow property={details.frequency} unit='MHz'>
               Frekvencia:
            </TableRow>
            <TableRow property={details.latency} unit='CL'>
               Késleltetés:
            </TableRow>
            <TableRow property={details.moduleNumber} unit='DB'>
               Modulok száma:
            </TableRow>
            <TableRow property={details.voltage} unit='V'>
               Feszültség:
            </TableRow>
         </tbody>
      </TableStyle>
   )
}

export default MemoryDetailsTable
