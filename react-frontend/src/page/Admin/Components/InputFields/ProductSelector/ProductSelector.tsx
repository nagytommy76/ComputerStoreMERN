import React, { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../../Context/AdminContext'
import axios, { AxiosResponse, AxiosError } from 'axios'

import { VgaType } from '../../../../ShopPages/Vga/VgaTypes'

import TextField from '@mui/material/TextField'

const ProductSelector: React.FC<Props> = ({ productType, productProperties }) => {
   const [allProducts, setAllProducts] = useState<VgaType[]>([])
   const [selectedVgaProduct, setSelectedVgaProduct] = useState<VgaType>()
   const { setProductInputs, setSelectedProductPictureUrls } = useContext(AdminContext)

   const fetchAllProduct = useCallback(async () => {
      axios
         .get(`admin/${productType}/get-all`)
         .then((response: AxiosResponse) => {
            response.data && setAllProducts(response.data.allProducts)
         })
         .catch((error: AxiosError) => console.log(error.message))
   }, [productType])

   useEffect(() => {
      fetchAllProduct()
   }, [productType, fetchAllProduct])

   const handleSelect = (event: ChangeEvent<HTMLTextAreaElement>) => {
      event.preventDefault()
      if (event.target.value === 'none') {
         setProductInputs(productProperties)
         setSelectedVgaProduct(productProperties)
      }
      if (setSelectedProductPictureUrls && event.target.value === 'none') setSelectedProductPictureUrls([])
      const foundElement: VgaType | undefined = allProducts.find(
         (element: VgaType) => element._id === event.target.value
      )
      if (foundElement !== undefined) {
         setProductInputs(foundElement)
         setSelectedVgaProduct(foundElement)
         if (setSelectedProductPictureUrls) {
            const picUrlsWithId = foundElement.pictureUrls.map((url, index) => {
               return {
                  id: index.toString(),
                  pictureUrl: url,
               }
            })
            setSelectedProductPictureUrls(picUrlsWithId)
         }
      }
   }
   return (
      <>
         <TextField
            margin='normal'
            variant='filled'
            id='productPicker'
            select
            label='Termék választó'
            value={selectedVgaProduct?._id || 'none'}
            onChange={handleSelect}
            SelectProps={{
               native: true,
            }}
            helperText='Válaszd ki a módosítani kívánt terméket'
         >
            <option value='none'>-- Nincs kiválasztva termék! --</option>
            {allProducts.map(item => (
               <option value={item._id} key={item._id}>
                  {item.manufacturer} {item.type} {item.typeCode} {item.price} Ft
               </option>
            ))}
         </TextField>
      </>
   )
}

type Props = {
   productType: string
   productProperties: any
}

export default ProductSelector
