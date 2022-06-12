import React, { useContext } from 'react'
import DetailsContext from '../../Context/DetailsContext'
import { HDDDetailsType } from '../HDDTypes'
import { TableStyle } from '../../BaseComponents/ProductDetailsPage/DetailTable/TableStyle'

const TableRow = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/DetailTable/TableRow'))

const HDDTable = () => {
   const { details }: { details: HDDDetailsType } = useContext(DetailsContext)
   return (
      <TableStyle>
         <tbody>
            <TableRow property={details.warranity} unit='Hónap'>
               Garancia:
            </TableRow>
            <TableRow property={details.capacity} unit='Gb'>
               Kapacitás:
            </TableRow>
            <TableRow property={details.rpm} unit='rpm'>
               Fordulat/perc
            </TableRow>
            <TableRow property={details.cache} unit='Mb'>
               Cache mérete
            </TableRow>
            <TableRow property={details.sataType}>SATA típusa</TableRow>
            <TableRow property={details.sizeInCol} unit='Col'>
               Fizikai méret
            </TableRow>
         </tbody>
      </TableStyle>
   )
}

export default HDDTable
