import { useState, useEffect, useCallback } from 'react'
import { axiosInstance as axios, isAxiosError } from '../../../AxiosSetup/AxiosInstance'

const useGetDetails = (productType: string, productId: string) => {
   const [foundDetails, setFoundDetails] = useState({
      details: {},
      _id: '',
      pictureUrls: [''],
      manufacturer: '',
      price: 0,
      type: '',
      typeCode: '',
   })
   const handleRequest = useCallback(
      async (productId: string) => {
         try {
            const foundProductDetails = await axios.get(`${productType}/details?productId=${productId}`)
            console.log(foundProductDetails.status)
            const chartdata = foundProductDetails.data.productDetails.details.chartData
            if (chartdata) {
               foundProductDetails.data.productDetails.details.chartData = chartdata.map((data: any) => {
                  const date = new Date(data.timestamp)
                  return {
                     ...data,
                     timestamp: date.toLocaleDateString('hu-HU', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                     }),
                  }
               })
            }
            setFoundDetails(foundProductDetails.data.productDetails)
         } catch (error) {
            if (isAxiosError(error)) {
               console.log(error.response)
            }
         }
      },
      [productType]
   )

   useEffect(() => {
      handleRequest(productId)
   }, [productId, handleRequest])

   return foundDetails
}

export default useGetDetails
