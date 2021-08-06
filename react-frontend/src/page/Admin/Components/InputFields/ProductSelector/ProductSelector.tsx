import React, { ChangeEvent } from 'react'
import { InputContainer, StyledLabel, StyledSelect, StyledOption } from '../InputStyle'
import { VgaType } from '../../../../ShopPages/Vga/VgaTypes'

const ProductSelector: React.FC<Props> = ({ products, setDetailedProducts }) => {
   const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
      event.preventDefault()
      const foundElement: VgaType | undefined = products.find((element: VgaType) => element._id === event.target.value)
      if (foundElement !== undefined) setDetailedProducts(foundElement)
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
}

export default ProductSelector
