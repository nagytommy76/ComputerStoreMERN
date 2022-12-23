import React, { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { axiosInstance as axios, AxiosResponse } from '../../../../AxiosSetup/AxiosInstance'
import { VgaCompareProduct } from '../CompareTypes'

const useGetCompare = () => {
   const {
      state: { selectIdsFromCompareItems, productType },
   } = useLocation() as { state: { selectIdsFromCompareItems: string[]; productType: string } }

   const getCompareResult = useCallback(async () => {
      try {
         const compare = (await axios.get(
            `/${productType}/compare?productId=${selectIdsFromCompareItems}`
         )) as AxiosResponse<{ productDetails: VgaCompareProduct[] }, any>
         // productDetails: VgaCompareProduct[] | CpuCompare[] stb jön majd!!!
         return compare.data.productDetails
         // Létrehozni egy details statet ami már tartalmazza a magyar KEY-t és az egységekkel kibővített VALUE-kat
      } catch (error) {
         console.log(error)
         return null
      }
   }, [productType, selectIdsFromCompareItems])

   return getCompareResult
}

export default useGetCompare
