import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import useGetCompare from './useGetCompare'
import useConvertVGA from './ConvertProducts/useConvertVGA'
import UseConvertCPU from './ConvertProducts/UseConvertCPU'

import { ConvertedCPUDetailsType, ConvertedVGADetailsType } from './Types'
import { CpuCompareProduct, HeaderTypes, VgaCompareProduct } from '../CompareTypes'

const useComparePage = () => {
   const productType = useAppSelector((state) => state.productCompare.currentSelectedProductType)
   const [headerInfo, setHeaderInfo] = useState<HeaderTypes[]>([])
   const [convertedProductDetails, setConvertedProductDetails] = useState<
      ConvertedVGADetailsType[] | ConvertedCPUDetailsType[]
   >([])
   const productDetails = useGetCompare()
   const converVGADataToStringWithUnits = useConvertVGA()
   const converCpuDataToStringWithUnits = UseConvertCPU()

   // productDetails-hez majd VgaCompareProduct | CpuCompareProduct | SSDCompareProduct stb jön
   const getAndSetHeaderInfo = (productDetails: VgaCompareProduct[] | CpuCompareProduct[]) => {
      let helperArray: any = []
      setHeaderInfo(
         productDetails.map((product) => {
            switch (productType) {
               case 'vga':
                  converVGADataToStringWithUnits(helperArray, product as VgaCompareProduct)
                  break
               case 'cpu':
                  converCpuDataToStringWithUnits(helperArray, product as CpuCompareProduct)
                  break
               default:
                  break
            }
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
