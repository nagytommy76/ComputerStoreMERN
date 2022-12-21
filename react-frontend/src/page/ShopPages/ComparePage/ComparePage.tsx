import React, { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router'
import { axiosInstance as axios, AxiosResponse } from '../../../AxiosSetup/AxiosInstance'

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
   const [convertedProductDetails, setConvertedProductDetails] = useState<any[]>([])

   const getAndSetHeaderInfo = (productDetails: BaseProductType[]) => {
      let helperArray: any = []
      setHeaderInfo(
         productDetails.map(product => {
            const keyValuePair = Object.entries(VgaDetailProperties)
            let obj: any = {}
            for (const [key] of keyValuePair) {
               switch (key) {
                  case 'displayPort':
                  case 'DVI':
                  case 'HDMI':
                  case 'streamProcessors':
                     obj[key] = `${product.details[key]} Db`
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

            return {
               productID: product._id,
               productDisplayName: `${product.manufacturer} ${product.type}`,
               pictureUrl: product.pictureUrls[0],
               price: product.price,
            }
         })
      )
      setConvertedProductDetails(helperArray)
      console.log(helperArray)
   }

   const converDataToStringWithUnits = () => {}

   const getCompareResult = useCallback(async () => {
      try {
         const compare = (await axios.get(
            `/${productType}/compare?productId=${selectIdsFromCompareItems}`
         )) as AxiosResponse<{ productDetails: BaseProductType[] }, any>

         getAndSetHeaderInfo(compare.data.productDetails)

         // Létrehozni egy details statet ami már tartalmazza a magyar KEY-t és az egységekkel kibővített VALUE-kat
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
                  {/* <TableRow hover>
                     {convertedProductDetails.map(product =>
                        Object.entries(product).map(keyValuePair => (
                           <TableCell>{keyValuePair[1] as string}</TableCell>
                        ))
                     )}
                  </TableRow> */}
               </TableBody>
            </Table>
         </TableContainer>
      </ComparePageStyle>
   )
}

export default ComparePage
