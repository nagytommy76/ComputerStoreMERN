import React from 'react'
import { TableStyle } from '../../BaseComponents/ProductDetailsPage/DetailTable/TableStyle'

const TableRow = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/DetailTable/TableRow'))

const VgaDetailTable: React.FC<{ details: any }> = ({ details }) => {
   return (
      <TableStyle>
         <tbody>
            <TableRow property={details.warranity} unit='Hónap'>
               Garancia:
            </TableRow>
            <TableRow property={details.gpuManufacturer}>Chipset gyártó:</TableRow>
            <TableRow property={details.gpuBaseClock} unit='MHz'>
               Alap órajel:
            </TableRow>
            <TableRow property={details.gpuPeakClock} unit='MHz'>
               Emelt órajel:
            </TableRow>
            <TableRow property={details.vramCapacity} unit='GB'>
               Memória kapacitás:
            </TableRow>
            <TableRow property={details.vramSpeed} unit='GHz'>
               Memória sebesség:
            </TableRow>
            <TableRow property={details.vramType}>Memória Típusa:</TableRow>
            <TableRow property={details.vramBandwidth} unit='bit'>
               Memória sávszélesség:
            </TableRow>
            <TableRow property={details.minPowerSupply} unit='Watt'>
               Átlagos fogyasztás:
            </TableRow>
            <TableRow property={details.powerPin}>Tápcsatlakozók:</TableRow>
            <TableRow property={details.length}>Hosszúság:</TableRow>
            <TableRow property={details.pcieType}>PCI-E foglalat:</TableRow>
            <TableRow property={details.streamProcessors} unit='darab'>
               Stream processzorok:
            </TableRow>
            <TableRow property={details.HDMI} unit='darab'>
               HDMI:
            </TableRow>
            <TableRow property={details.displayPort} unit='darab'>
               DisplayPort:
            </TableRow>
            <TableRow property={details.DVI} unit='darab'>
               DVI:
            </TableRow>
         </tbody>
      </TableStyle>
   )
}

export default VgaDetailTable
