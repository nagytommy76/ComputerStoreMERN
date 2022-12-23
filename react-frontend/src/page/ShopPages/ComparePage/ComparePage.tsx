import { useState } from 'react'
import useComparePage from './Hooks/useComparePage'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import TableHeader from './TableHeader/TableHeader'

import { ComparePageStyle } from './Styles/CompareStyle'
import { HeaderTypes, VgaDetailProperties } from './CompareTypes'
import { BaseProductType } from '../BaseTypes'

const ComparePage = () => {
   const { convertedProductDetails, headerInfo } = useComparePage()
   // Egyelőre BaseProductType lesz, nem mindegyik property létezik
   const [compareProducts, setComparePeroducts] = useState<BaseProductType[]>([])

   return (
      <ComparePageStyle>
         <TableContainer component={Paper}>
            <Table aria-label='compare table'>
               <TableHeader compareProducts={headerInfo} />
               <TableBody>
                  {Object.entries(VgaDetailProperties).map(keyValuePair => (
                     <TableRow hover>
                        <>
                           <TableCell>{keyValuePair[1]}</TableCell>
                           {convertedProductDetails.map(details => (
                              <TableCell>{details[keyValuePair[0]]}</TableCell>
                           ))}
                        </>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </ComparePageStyle>
   )
}

export default ComparePage
