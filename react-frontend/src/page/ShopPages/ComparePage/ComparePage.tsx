import React, { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router'
import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'

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
   const {
      state: { selectIdsFromCompareItems, productType },
   } = useLocation() as { state: { selectIdsFromCompareItems: string[]; productType: string } }
   // Egyelőre BaseProductType lesz, nem mindegyik property létezik
   const [compareProducts, setComparePeroducts] = useState<BaseProductType[]>([])
   const [headerInfo, setHeaderInfo] = useState<HeaderTypes[]>([])

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
            <Table aria-label='compare table'>
               <TableHeader compareProducts={compareProducts} />
               <TableBody>
                  {Object.entries(VgaDetailProperties).map(keyValuePair => (
                     <TableRow hover>
                        <>
                           <TableCell>{keyValuePair[1]}</TableCell>
                           {compareProducts.map(product => (
                              <TableCell>{product.details[keyValuePair[0]]}</TableCell>
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
