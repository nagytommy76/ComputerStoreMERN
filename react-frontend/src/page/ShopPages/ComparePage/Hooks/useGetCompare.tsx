import { useCallback, useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { axiosInstance as axios, AxiosResponse } from '../../../../AxiosSetup/AxiosInstance'
import { useAppSelector } from '../../../../app/hooks'

import { CpuCompareProduct, HddCompareProduct, RamCompareProduct, VgaCompareProduct } from '../CompareTypes'

const useGetCompare = () => {
   let navigate = useNavigate()
   const selectedCompareItems = useAppSelector((state) => state.productCompare.selectedProductsByType)
   const productType = useAppSelector((state) => state.productCompare.currentSelectedProductType)
   const [productDetails, setProductDetails] = useState<
      VgaCompareProduct[] | CpuCompareProduct[] | RamCompareProduct[] | HddCompareProduct[]
   >([])

   const selectIdsFromCompareItems: string[] = useMemo(() => {
      return selectedCompareItems.map((item) => item.productId)
   }, [selectedCompareItems])

   const getCompareResult = useCallback(async () => {
      try {
         if (selectIdsFromCompareItems.length === 0) throw new Error('Üres az id array')
         const compare = (await axios.get(
            `/${productType}/compare?productId=${selectIdsFromCompareItems}`
         )) as AxiosResponse<
            {
               productDetails:
                  | VgaCompareProduct[]
                  | CpuCompareProduct[]
                  | RamCompareProduct[]
                  | HddCompareProduct[]
            },
            any
         >
         return compare.data.productDetails
      } catch (error) {
         console.log(error)
         navigate(-1)
      }
   }, [selectIdsFromCompareItems, navigate, productType])

   useEffect(() => {
      getCompareResult().then((data) => {
         if (data) setProductDetails(data)
      })
   }, [getCompareResult])

   return productDetails
}

export default useGetCompare
