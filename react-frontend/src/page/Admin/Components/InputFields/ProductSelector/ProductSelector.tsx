import React, { ChangeEvent, useEffect, useState } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'

import { VgaType } from '../../../../ShopPages/Vga/VgaTypes'
import { PictureUrlType } from '../../../Vga/Types'

import TextField from '@mui/material/TextField'

const ProductSelector: React.FC<Props> = ({ setDetailedProducts, setPictureUrls, productType, productProperties }) => {
   const [allProducts, setAllProducts] = useState<VgaType[]>([])
   const [selectedVgaProduct, setSelectedVgaProduct] = useState<VgaType>()
   const fetchAllProduct = async () => {
      await axios
         .get(`admin/${productType}/get-all`)
         .then((response: AxiosResponse) => {
            setAllProducts(response.data.allProducts)
         })
         .catch((error: AxiosError) => console.log(error))
   }
   useEffect(() => {
      fetchAllProduct()
      // eslint-disable-next-line
   }, [productType])
   const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault()
      if (event.target.value === 'none') {
         setDetailedProducts(productProperties)
         setSelectedVgaProduct(productProperties)
      }
      if (setPictureUrls && event.target.value === 'none') setPictureUrls([])
      const foundElement: VgaType | undefined = allProducts.find((element: VgaType) => element._id === event.target.value)
      if (foundElement !== undefined) {
         setDetailedProducts(foundElement)
         setSelectedVgaProduct(foundElement)
         if (setPictureUrls) {
            const picUrlsWithId = foundElement.pictureUrls.map((url, index) => {
               return {
                  id: index.toString(),
                  pictureUrl: url
               }
            })
            setPictureUrls(picUrlsWithId)
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
            onChange={(event: any) => handleSelect(event)}
            SelectProps={{
               native: true
            }}
            helperText='Válaszd ki a módosítani kívánt terméket'>
            <option value='none'>-- Nincs kiválasztva termék! --</option>
            {allProducts.map((item) => (
               <option value={item._id} key={item._id}>
                  {item.manufacturer} {item.type} {item.typeCode} {item.price} Ft
               </option>
            ))}
         </TextField>
      </>
   )
}

type Props = {
   setDetailedProducts: React.Dispatch<React.SetStateAction<any>>
   setPictureUrls?: React.Dispatch<React.SetStateAction<PictureUrlType[]>>
   productType: string
   productProperties: any
}

export default ProductSelector
