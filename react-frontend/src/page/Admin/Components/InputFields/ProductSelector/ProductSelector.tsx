import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../../Context/AdminContext'
import { axiosInstance as axios, AxiosResponse, AxiosError } from '../../../../../AxiosSetup/AxiosInstance'

import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { BaseProductType } from '../../../../ShopPages/BaseTypes'

const ProductSelector: React.FC<Props> = ({ productType, productProperties }) => {
   const [allProducts, setAllProducts] = useState<BaseProductType[]>([])
   const [selectedVgaProduct, setSelectedVgaProduct] = useState<BaseProductType>()
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

   const handleSelect = (event: SelectChangeEvent) => {
      event.preventDefault()
      if (event.target.value === 'none') {
         setProductInputs(productProperties)
         setSelectedVgaProduct(productProperties)
      }
      if (setSelectedProductPictureUrls && event.target.value === 'none') setSelectedProductPictureUrls([])
      const foundElement: BaseProductType | undefined = allProducts.find(
         (element: BaseProductType) => element._id === event.target.value
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
      <FormControl variant='filled' margin='normal' fullWidth>
         <InputLabel id='demo-simple-select-label'>Termék választó</InputLabel>
         <Select
            labelId='demo-simple-select-label'
            id='productPicker'
            value={selectedVgaProduct?._id || 'none'}
            label='Termék választó'
            onChange={handleSelect}
         >
            <MenuItem value='none'>-- Nincs kiválasztva termék! --</MenuItem>
            {allProducts.map(item => (
               <MenuItem value={item._id} key={item._id}>
                  {item.manufacturer} {item.type} {item.typeCode} {item.price} Ft
               </MenuItem>
            ))}
         </Select>
         <FormHelperText>Válaszd ki a módosítani kívánt terméket</FormHelperText>
      </FormControl>
   )
}

type Props = {
   productType: string
   productProperties: any
}

export default ProductSelector
