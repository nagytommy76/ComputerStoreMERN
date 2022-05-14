import { useState, useEffect, useCallback } from 'react'
import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'

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
         const foundProductDetails = await axios.get(`${productType}/details?productId=${productId}`)
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
      },
      [productType]
   )

   useEffect(() => {
      handleRequest(productId)
   }, [productId, handleRequest])

   return foundDetails
}

export default useGetDetails
