import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
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
   const navigate = useNavigate()

   const handleRequest = useCallback(async () => {
      try {
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
      } catch (error) {
         if (isAxiosError(error)) {
            if (error.response?.status === 500) {
               navigate(`/${productType}/`)
            }
            console.log(error.response)
         }
      }
   }, [navigate, productId, productType])

   useEffect(() => {
      handleRequest()
   }, [productId, handleRequest])

   return foundDetails
}

export default useGetDetails
