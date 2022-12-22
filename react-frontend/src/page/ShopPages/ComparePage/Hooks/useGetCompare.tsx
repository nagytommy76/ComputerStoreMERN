import React, { useCallback } from 'react'
import { axiosInstance as axios, AxiosResponse } from '../../../../AxiosSetup/AxiosInstance'
import { BaseProductType } from '../../BaseTypes'

const useGetCompare = (productType: string, selectIdsFromCompareItems: string[]) => {
   const getCompareResult = useCallback(async () => {
      try {
         const compare = (await axios.get(
            `/${productType}/compare?productId=${selectIdsFromCompareItems}`
         )) as AxiosResponse<{ productDetails: BaseProductType[] }, any>
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
