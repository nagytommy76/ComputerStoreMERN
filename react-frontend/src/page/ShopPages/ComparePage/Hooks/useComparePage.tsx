import { useEffect, useState } from 'react'
import useGetCompare from './useGetCompare'
import useConvertVGA from './ConvertProducts/useConvertVGA'

import { ConvertedVGADetailsType } from './Types'
import { HeaderTypes, VgaCompareProduct } from '../CompareTypes'

const useComparePage = () => {
   const [headerInfo, setHeaderInfo] = useState<HeaderTypes[]>([])
   const [convertedProductDetails, setConvertedProductDetails] = useState<ConvertedVGADetailsType[]>([])
   const productDetails = useGetCompare()
   const converVGADataToStringWithUnits = useConvertVGA()

   // productDetails-hez majd VgaCompareProduct | CpuCompareProduct | SSDCompareProduct stb jön
   const getAndSetHeaderInfo = (productDetails: VgaCompareProduct[]) => {
      let helperArray: any = []
      setHeaderInfo(
         productDetails.map((product) => {
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

   useEffect(() => {
      getAndSetHeaderInfo(productDetails)
   }, [productDetails])

   useEffect(() => {}, [])

   return {
      convertedProductDetails,
      headerInfo,
   }
}

export default useComparePage
