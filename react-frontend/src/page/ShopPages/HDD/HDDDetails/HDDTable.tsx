import React from 'react'
import { TableStyle } from '../../BaseComponents/ProductDetailsPage/DetailTable/TableStyle'
import { useLocation } from 'react-router-dom'

const TableRow = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/DetailTable/TableRow'))

const HDDTable = () => {
   // const {
   //    state: { details },
   // } = useLocation()
   const test = {
      manufacturer: 'semmi',
      price: 222,
      type: 'sesfdsfs',
      typeCode: '233223',
      details: {
         warranity: 32,
         manufacturerPageUrl: 'dfsdhl',
         description: 'sddasadsdas',
         capacity: 'asdasas',
         rpm: '3434',
         cache: 'sdfdsds',
         sataType: 3,
         sizeInCol: '33',
      },
   }
   const { details } = test
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
