import React from 'react'
import axios, { AxiosResponse } from 'axios'

const useGetDetails = async (productType: string, productId: string) => {
   const foundProductsDetails = (await axios.get(`${productType}/details?${productId}`)) as {
      description: string
      manufacturerPageUrl: string
      warranity: number
   }
   return foundProductsDetails
}

export default useGetDetails
