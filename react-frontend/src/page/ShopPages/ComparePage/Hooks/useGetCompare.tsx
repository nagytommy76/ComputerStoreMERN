import { useCallback, useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { axiosInstance as axios, AxiosResponse } from '../../../../AxiosSetup/AxiosInstance'
import { useAppSelector } from '../../../../app/hooks'

import { VgaCompareProduct } from '../CompareTypes'

const useGetCompare = () => {
   let navigate = useNavigate()
   const selectedCompareItems = useAppSelector((state) => state.productCompare.selectedProductsByType)
   const [productDetails, setProductDetails] = useState<VgaCompareProduct[]>([])

   const selectIdsFromCompareItems: string[] = useMemo(() => {
      return selectedCompareItems.map((item) => item.productId)
   }, [selectedCompareItems])

   const getCompareResult = useCallback(async () => {
      try {
         const compare = (await axios.get(
            `/${selectedCompareItems[0].productType}/compare?productId=${selectIdsFromCompareItems}`
         )) as AxiosResponse<{ productDetails: VgaCompareProduct[] }, any>
         // productDetails: VgaCompareProduct[] | CpuCompare[] stb jön majd!!!
         return compare.data.productDetails
         // Létrehozni egy details statet ami már tartalmazza a magyar KEY-t és az egységekkel kibővített VALUE-kat
      } catch (error) {
         console.log(error)
         navigate(-1)
      }
   }, [selectedCompareItems, selectIdsFromCompareItems, navigate])

   useEffect(() => {
      getCompareResult().then((data) => {
         if (data) setProductDetails(data)
      })
   }, [getCompareResult])

   return productDetails
}

export default useGetCompare
