import useComparePage from './Hooks/useComparePage'

import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'

import TableHeader from './TableHeader/TableHeader'
import TableBodyComponent from './TableBody/TableBody'

import { ComparePageStyle } from './Styles/CompareStyle'

const ComparePage = () => {
   const { convertedProductDetails, headerInfo } = useComparePage()

   return (
      <ComparePageStyle>
         <TableContainer component={Paper}>
            <Table aria-label='compare table'>
               <TableHeader compareProducts={headerInfo} />
               <TableBodyComponent convertedProductDetails={convertedProductDetails} />
            </Table>
         </TableContainer>
      </ComparePageStyle>
   )
}

export default ComparePage
