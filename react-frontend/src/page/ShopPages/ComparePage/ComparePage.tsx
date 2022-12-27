import useComparePage from './Hooks/useComparePage'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import TableHeader from './TableHeader/TableHeader'

import { ComparePageStyle } from './Styles/CompareStyle'
import { VgaDetailProperties } from './CompareTypes'

const ComparePage = () => {
   const { convertedProductDetails, headerInfo } = useComparePage()

   return (
      <ComparePageStyle>
         <TableContainer component={Paper}>
            <Table aria-label='compare table'>
               <TableHeader compareProducts={headerInfo} />
               <TableBody>
                  {Object.entries(VgaDetailProperties).map((keyValuePair, index) => (
                     <TableRow hover key={index}>
                        <>
                           <TableCell>{keyValuePair[1]}</TableCell>
                           {convertedProductDetails.map(details => {
                              return keyValuePair[0] !== 'manufacturerPageUrl' ? (
                                 <TableCell>{details[keyValuePair[0]]}</TableCell>
                              ) : (
                                 <TableCell>
                                    <a target='_blank' href={details[keyValuePair[0]]}>
                                       Gyártó honlap
                                    </a>
                                 </TableCell>
                              )
                           })}
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
