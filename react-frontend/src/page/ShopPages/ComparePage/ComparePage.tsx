import React, { useEffect, useState, useCallback } from 'react'
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
import { BaseProductType } from '../BaseTypes'

const ComparePage = () => {
   const {
      state: { selectIdsFromCompareItems, productType },
   } = useLocation() as { state: { selectIdsFromCompareItems: string[]; productType: string } }
   // Egyelőre BaseProductType lesz, nem mindegyik property létezik
   const [compareProducts, setComparePeroducts] = useState<BaseProductType[]>([])

   const getCompareResult = useCallback(async () => {
      try {
         const compare = await axios.get(`/${productType}/compare?productId=${selectIdsFromCompareItems}`)
         setComparePeroducts(compare.data.productDetails)
      } catch (error) {
         console.log(error)
      }
   }, [productType, selectIdsFromCompareItems])

   useEffect(() => {
      getCompareResult()
   }, [getCompareResult])

   return (
      <ComparePageStyle>
         <TableContainer component={Paper}>
            <Table sx={{ Width: 650 }} aria-label='simple table'>
               <TableHead>
                  <TableRow>
                     <TableCell>Ide majd kitalálom mi legyen</TableCell>
                     {compareProducts.map(details => (
                        <TableCell key={details._id} align='left'>
                           {details.type}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  <TableRow hover>
                     <TableCell>GPU Órajel</TableCell>
                     {compareProducts.map(product => (
                        <TableCell component='td' scope='row'>
                           {product.details.gpuBaseClock} MHz
                        </TableCell>
                     ))}
                  </TableRow>
                  {/* <TableRow hover>
                     <TableCell component='th' scope='row'>
                        Gyártó
                     </TableCell>
                     <TableCell component='td' scope='row'>
                        teszt
                     </TableCell>
                  </TableRow>
                  <TableRow hover>
                     <TableCell component='th' scope='row'>
                        DVI
                     </TableCell>
                  </TableRow>
                  <TableRow hover>
                     <TableCell component='th' scope='row'>
                        Vram
                     </TableCell>
                  </TableRow> */}
                  {/* {selectIdsFromCompareItems.map(row => (
                     <TableRow hover key={row}>
                        <TableCell component='th' scope='row'>
                           {row}
                        </TableCell>
                        <TableCell align='right'>{row}</TableCell>
                     </TableRow>
                  ))} */}
               </TableBody>
            </Table>
         </TableContainer>
      </ComparePageStyle>
   )
}

export default ComparePage
