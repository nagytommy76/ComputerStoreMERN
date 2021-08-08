import React, { ChangeEvent, useEffect, useState } from 'react'
import { InputContainer, StyledLabel, StyledSelect, StyledOption } from '../InputStyle'
import { VgaType } from '../../../../ShopPages/Vga/VgaTypes'
import { PictureUrlType } from '../../../Vga/Types'
import axios, { AxiosResponse, AxiosError } from 'axios'

const ProductSelector: React.FC<Props> = ({ setDetailedProducts, setPictureUrls }) => {
   const [allVgaProducts, setAllVgaProducts] = useState<VgaType[]>([])
   const fetchAllVga = async () => {
      await axios
         .get('admin/vga/get-all')
         .then((response: AxiosResponse) => {
            setAllVgaProducts(response.data)
         })
         .catch((error: AxiosError) => console.log(error))
   }
   useEffect(() => {
      fetchAllVga()
   }, [])
   const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault()
      const foundElement: VgaType | undefined = allVgaProducts.find((element: VgaType) => element._id === event.target.value)
      if (foundElement !== undefined) {
         setDetailedProducts(foundElement)
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
      <InputContainer>
         <StyledLabel htmlFor='product-picker'>Termék választó</StyledLabel>
         <StyledSelect name='productPicker' id='product-picker' onChange={(event) => handleSelect(event)}>
            <StyledOption value='none'>-- Nincs kiválasztva termék! --</StyledOption>
            {allVgaProducts.map((item) => (
               <StyledOption value={item._id} key={item._id}>
                  {item.manufacturer} {item.type} {item.typeCode} {item.price} Ft
               </StyledOption>
            ))}
         </StyledSelect>
      </InputContainer>
   )
}

type Props = {
   setDetailedProducts: React.Dispatch<React.SetStateAction<VgaType>>
   setPictureUrls?: React.Dispatch<React.SetStateAction<PictureUrlType[]>>
}

export default ProductSelector
