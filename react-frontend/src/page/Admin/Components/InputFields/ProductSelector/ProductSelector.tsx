import React, { ChangeEvent } from 'react'
import { InputContainer, StyledLabel, StyledSelect, StyledOption } from '../InputStyle'
import { VgaType } from '../../../../ShopPages/Vga/VgaTypes'
import { PictureUrlType } from '../../../Vga/Insert/VgaInsert'

const ProductSelector: React.FC<Props> = ({ products, setDetailedProducts, setPictureUrls }) => {
   const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault()
      const foundElement: VgaType | undefined = products.find((element: VgaType) => element._id === event.target.value)
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
            <StyledOption value={undefined}>-- Nincs kiválasztva termék! --</StyledOption>
            {products.map((item) => (
               <StyledOption value={item._id} key={item._id}>
                  {item.type} {item.typeCode} {item.price} Ft
               </StyledOption>
            ))}
         </StyledSelect>
      </InputContainer>
   )
}

type Props = {
   products: VgaType[]
   setDetailedProducts: React.Dispatch<React.SetStateAction<VgaType>>
   setPictureUrls?: React.Dispatch<React.SetStateAction<PictureUrlType[]>>
}

export default ProductSelector
