import React from 'react'
import NumberFormat from 'react-number-format'
import Basket from './Basket'
import DeleteIcon from './DeleteIcon'
import {
   StyledCartItem,
   LeftImageContainerStyle,
   RightContentContainerStyle,
   ImageStyle,
   PriceAndQuantityStyle,
   ProductNameStyle
} from './CartItemStyle'

const CartItem: React.FC<Props> = ({ id, productName, price, quantity, displayImage }) => {
   return (
      <StyledCartItem>
         <DeleteIcon id={id} />
         <LeftImageContainerStyle>
            <ImageStyle src={displayImage} alt='' />
         </LeftImageContainerStyle>
         <RightContentContainerStyle>
            <ProductNameStyle>{productName}</ProductNameStyle>
            <PriceAndQuantityStyle>
               <Basket quaintity={quantity} id={id} />
               <NumberFormat value={price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            </PriceAndQuantityStyle>
         </RightContentContainerStyle>
      </StyledCartItem>
   )
}

type Props = {
   id: string
   productName: string
   price: number
   quantity: number
   displayImage: string
}

export default CartItem
