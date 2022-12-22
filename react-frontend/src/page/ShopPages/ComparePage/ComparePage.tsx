import React, { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router'
import useGetCompare from './Hooks/useGetCompare'

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
   const getCompareResult = useGetCompare(productType, selectIdsFromCompareItems)
   // Egyelőre BaseProductType lesz, nem mindegyik property létezik
   const [compareProducts, setComparePeroducts] = useState<BaseProductType[]>([])
   const [headerInfo, setHeaderInfo] = useState<HeaderTypes[]>([])
   const [convertedProductDetails, setConvertedProductDetails] = useState<any[]>([])

   const getAndSetHeaderInfo = (productDetails: BaseProductType[]) => {
      let helperArray: any = []
      setHeaderInfo(
         productDetails.map(product => {
            converVGADataToStringWithUnits(helperArray, product)
            return {
               productID: product._id,
               productDisplayName: `${product.manufacturer} ${product.type}`,
               pictureUrl: product.pictureUrls[0],
               price: product.price,
            }
         })
      )
      setConvertedProductDetails(helperArray)
   }

   const converVGADataToStringWithUnits = (helperArray: any[], product: BaseProductType) => {
      const keyValuePair = Object.entries(VgaDetailProperties)
      let obj: any = {}
      for (const [key] of keyValuePair) {
         switch (key) {
            case 'displayPort':
            case 'DVI':
            case 'HDMI':
            case 'streamProcessors':
               obj[key] = `${product.details[key]} DB`
               break
            case 'gpuBaseClock':
            case 'gpuPeakClock':
               obj[key] = `${product.details[key]} MHz`
               break
            case 'length':
               obj[key] = `${product.details[key]} CM`
               break
            case 'minPowerSupply':
            case 'powerConsuption':
               obj[key] = `${product.details[key]} Watt`
               break
            case 'vramBandwidth':
               obj[key] = `${product.details[key]} bit`
               break
            case 'vramCapacity':
               obj[key] = `${product.details[key]} GB`
               break
            case 'vramSpeed':
               obj[key] = `${product.details[key]} GB/s`
               break
            case 'warranity':
               obj[key] = `${product.details[key]} hónap`
               break
            default:
               obj[key] = product.details[key]
         }
      }
      helperArray.push(obj)
   }

   const callCompareResult = useCallback(async () => {
      const productDetails = await getCompareResult()
      productDetails !== null && getAndSetHeaderInfo(productDetails)
   }, [getCompareResult])

   useEffect(() => {
      callCompareResult()
   }, [callCompareResult])

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
