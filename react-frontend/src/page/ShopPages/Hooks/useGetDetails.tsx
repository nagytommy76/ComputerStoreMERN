import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

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
