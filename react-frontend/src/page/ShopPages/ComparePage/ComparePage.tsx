import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { ComparePageStyle } from './Styles/CompareStyle'

const ComparePage = () => {
   const {
      state: { selectIdsFromCompareItems, productType },
   } = useLocation() as { state: { selectIdsFromCompareItems: string[]; productType: string } }

   const getCompareResult = async () => {
      try {
         const compare = await axios.get(`/${productType}/compare?productId=${selectIdsFromCompareItems}`)
         console.log(compare.data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      console.log('hellós')
      getCompareResult()
   }, [])

   return (
      <ComparePageStyle>
         <TableContainer component={Paper}>
            <Table sx={{ Width: 650 }} aria-label='simple table'>
               <TableHead>
                  <TableRow>
                     <TableCell>Dessert (100g serving)</TableCell>
                     <TableCell align='right'>Calories</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {selectIdsFromCompareItems.map(row => (
                     <TableRow hover key={row}>
                        <TableCell component='th' scope='row'>
                           {row}
                        </TableCell>
                        <TableCell align='right'>{row}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </ComparePageStyle>
   )
}

export default ComparePage
