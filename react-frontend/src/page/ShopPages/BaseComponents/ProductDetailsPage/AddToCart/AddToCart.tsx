import React, { useContext, useState } from 'react'
import { CartQuantityStyle, StyledCartSection, AddToCartButton, InputAndLabelContainer, StyledLabel } from './CartStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { sendCartItemsToSaveInDB } from '../../../../../app/slices/CartSlice'
import { useAppDispatch } from '../../../../../app/hooks'
import { VgaDetailsContext } from '../../../Vga/VgaDetails/VgaDetailsContext/DetailsContext'

const AddToCart = () => {
   const dispatch = useAppDispatch()
   const [quantity, setQuantity] = useState<string>('1')
   const { _id, manufacturer, type, typeCode, price, pictureUrls } = useContext(VgaDetailsContext)
   const addItemToCart = () => {
      dispatch(
         sendCartItemsToSaveInDB(
            {
               _id,
               productName: `${manufacturer} ${type} ${typeCode}`,
               price,
               itemQuantity: quantity,
               displayImage: pictureUrls[0]
            },
            'vgaproduct'
         )
      )
   }

   return (
      <StyledCartSection>
         <InputAndLabelContainer>
            <CartQuantityStyle
               id='cart'
               type='number'
               max='30'
               min='1'
               value={quantity}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuantity(event.target.value)}
            />
            <StyledLabel htmlFor='cart'>Darab</StyledLabel>
         </InputAndLabelContainer>
         <AddToCartButton onClick={addItemToCart}>
            <FontAwesomeIcon icon={['fas', 'cart-plus']} size='3x' />
         </AddToCartButton>
      </StyledCartSection>
   )
}

export default AddToCart
