import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import useGetCompare from './useGetCompare'
import useConvertVGA from './ConvertProducts/useConvertVGA'
import UseConvertCPU from './ConvertProducts/UseConvertCPU'
import useConvertRAM from './ConvertProducts/useConvertRAM'
import useConvertHDD from './ConvertProducts/useConvertHDD'
import useConvertSSD from './ConvertProducts/useConvertSSD'

import {
   ConvertedCPUDetailsType,
   ConvertedHDDDetailsType,
   ConvertedRAMDetailsType,
   ConvertedVGADetailsType,
} from './Types'
import {
   CpuCompareProduct,
   HddCompareProduct,
   HeaderTypes,
   RamCompareProduct,
   SsdCompareProduct,
   VgaCompareProduct,
} from '../CompareTypes'

const useComparePage = () => {
   const productType = useAppSelector((state) => state.productCompare.currentSelectedProductType)
   const [headerInfo, setHeaderInfo] = useState<HeaderTypes[]>([])
   const [convertedProductDetails, setConvertedProductDetails] = useState<
      | ConvertedVGADetailsType[]
      | ConvertedCPUDetailsType[]
      | ConvertedRAMDetailsType[]
      | ConvertedHDDDetailsType[]
   >([])
   const productDetails = useGetCompare()
   const converVGADataToStringWithUnits = useConvertVGA()
   const converCpuDataToStringWithUnits = UseConvertCPU()
   const converRAMDataToStringWithUnits = useConvertRAM()
   const converHDDDataToStringWithUnits = useConvertHDD()
   const convertHDDDataToStringWithUnits = useConvertSSD()

   // productDetails-hez majd VgaCompareProduct | CpuCompareProduct | SSDCompareProduct stb jön
   const getAndSetHeaderInfo = (
      productDetails:
         | VgaCompareProduct[]
         | CpuCompareProduct[]
         | RamCompareProduct[]
         | HddCompareProduct[]
         | SsdCompareProduct[]
   ) => {
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
               case 'memory':
               case 'ram':
                  converRAMDataToStringWithUnits(helperArray, product as RamCompareProduct)
                  break
               case 'hdd':
                  converHDDDataToStringWithUnits(helperArray, product as HddCompareProduct)
                  break
               case 'ssd':
                  convertHDDDataToStringWithUnits(helperArray, product as SsdCompareProduct)
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

   return {
      convertedProductDetails,
      headerInfo,
   }
}

export default useComparePage
