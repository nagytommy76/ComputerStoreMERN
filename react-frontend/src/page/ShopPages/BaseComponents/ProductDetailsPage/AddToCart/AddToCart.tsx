import React, { useContext, useState } from 'react'
import { sendCartItemToSaveInDB } from '../../../../../app/slices/CartSlice'
import { useAppDispatch } from '../../../../../app/hooks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   CartQuantityStyle,
   StyledCartSection,
   AddToCartButton,
   InputAndLabelContainer,
   StyledLabel,
} from './CartStyle'
import DetailsContext from '../../../Context/DetailsContext'

const AddToCart: React.FC = () => {
   const dispatch = useAppDispatch()
   const { productId, manufacturer, pictureUrls, price, productType, type, typeCode } =
      useContext(DetailsContext)
   const [quantity, setQuantity] = useState<string>('1')

   const addItemToCart = () => {
      dispatch(
         sendCartItemToSaveInDB({
            _id: productId,
            productType,
            displayName: `${manufacturer} ${type} ${typeCode}`,
            displayImage: pictureUrls[0],
            price,
            itemQuantity: parseInt(quantity),
         })
      )
      setQuantity('1')
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
