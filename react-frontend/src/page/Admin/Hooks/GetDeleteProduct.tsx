import { useState, useEffect } from 'react'
import { axiosInstance as axios } from '../../../AxiosSetup/AxiosInstance'

import { ProductToDeleteType } from '../Components/DeleteComponents/Types'

const useDeleteProduct = (productType: string) => {
   const [allDetailedProduct, setAllDetailedProduct] = useState<ProductToDeleteType[]>([])

   useEffect(() => {
      axios
         .get(`admin/${productType}/get-to-delete`)
         .then(allProduct => {
            if (allProduct.status === 200) setAllDetailedProduct(allProduct.data.allProducts)
         })
         .catch(error => console.log(error))
   }, [productType])

   return { setAllDetailedProduct, allDetailedProduct }
}

export default useDeleteProduct
