import React, { useContext } from 'react'
import DetailsContext from '../../Context/DetailsContext'
import { TableStyle } from '../../BaseComponents/ProductDetailsPage/DetailTable/TableStyle'
import { CpuDetailsType } from '../CpuTypes'

const TableRow = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/DetailTable/TableRow'))

const CpuDetailTable = () => {
   const { details }: { details: CpuDetailsType } = useContext(DetailsContext)
   return (
      <TableStyle>
         <tbody>
            <TableRow property={details.warranity} unit='Hónap'>
               Garancia:
            </TableRow>
            <TableRow property={details.coreCount} unit='mag'>
               Magok:
            </TableRow>
            <TableRow property={details.threadCount} unit='szál'>
               Szálak:
            </TableRow>
            <TableRow property={details.baseClock} unit='MHz'>
               Alap órajel:
            </TableRow>
            <TableRow property={details.boostClock} unit='MHz'>
               Turbó órajel:
            </TableRow>
            <TableRow property={details.TDP} unit='Watt'>
               TDP:
            </TableRow>
            <TableRow property={details.l2Cache} unit='Mb'>
               L2 Cache:
            </TableRow>
            <TableRow property={details.l3Cache} unit='Mb'>
               L3 Cache:
            </TableRow>
            <TableRow property={details.socket}>Foglalat:</TableRow>
            <TableRow property={details.architecture}>Architektúra:</TableRow>
            <TableRow property={details.cpuCodeName}>CPU kódneve:</TableRow>
            <TableRow property={details.stockCoolerName}>Hűtő:</TableRow>
            <TableRow property={details.integratedGraphicsName}>Grafikus vezérlő:</TableRow>
         </tbody>
      </TableStyle>
   )
}

export default CpuDetailTable
