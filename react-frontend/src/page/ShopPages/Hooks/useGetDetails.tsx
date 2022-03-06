import { useState, useEffect } from 'react'
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
   const handleRequest = async (productId: string) => {
      const foundProductDetails = await axios.get(`${productType}/details?productId=${productId}`)
      setFoundDetails(foundProductDetails.data.productDetails)
   }

   useEffect(() => {
      handleRequest(productId)
   }, [])

   return foundDetails
}

export default useGetDetails
