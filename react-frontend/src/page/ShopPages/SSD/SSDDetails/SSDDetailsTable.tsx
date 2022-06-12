import React, { useContext } from 'react'
import { TableStyle } from '../../BaseComponents/ProductDetailsPage/DetailTable/TableStyle'
import DetailsContext from '../../Context/DetailsContext'

const TableRow = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/DetailTable/TableRow'))

const SSDDetailsTable = () => {
   const { details } = useContext(DetailsContext)
   return (
      <TableStyle>
         <tbody>
            <TableRow property={details.warranity} unit='Hónap'>
               Garancia:
            </TableRow>
            <TableRow property={details.connection}>Csatlakozás:</TableRow>
            <TableRow property={details.size}>Méret:</TableRow>
            <TableRow property={details.nandTechnology}>NAND Technológia:</TableRow>
            <TableRow property={details.capacity} unit='GB'>
               Kapacitás:
            </TableRow>
            <TableRow property={details.readingSpeed} unit='MB/s'>
               Olvasási sebesség:
            </TableRow>
            <TableRow property={details.writingSpeed} unit='MB/s'>
               Írási sebesség:
            </TableRow>
            <TableRow property={details.tbw} unit='TB'>
               TBW (max írási mennyiség):
            </TableRow>
         </tbody>
      </TableStyle>
   )
}

export default SSDDetailsTable
