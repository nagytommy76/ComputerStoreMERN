import React, { useCallback, useEffect, useState } from 'react'
import useGetCompare from './useGetCompare'
import useConvertVGA from './ConvertProducts/useConvertVGA'

import { ConvertedVGADetailsType } from './Types'
import { HeaderTypes, VgaCompareProduct } from '../CompareTypes'

const useComparePage = () => {
   const [headerInfo, setHeaderInfo] = useState<HeaderTypes[]>([])
   const [convertedProductDetails, setConvertedProductDetails] = useState<ConvertedVGADetailsType[]>([])
   const getCompareResult = useGetCompare()
   const converVGADataToStringWithUnits = useConvertVGA()

   // productDetails-hez majd VgaCompareProduct | CpuCompareProduct | SSDCompareProduct stb jön
   const getAndSetHeaderInfo = (productDetails: VgaCompareProduct[]) => {
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

   const callCompareResult = useCallback(async () => {
      const productDetails = await getCompareResult()
      productDetails !== null && getAndSetHeaderInfo(productDetails)
   }, [getCompareResult])

   useEffect(() => {
      callCompareResult()
   }, [callCompareResult])

   return {
      convertedProductDetails,
      headerInfo,
   }
}

export default useComparePage
