import React from 'react'
import NumberFormat from 'react-number-format'
import {
   StyledCartItem,
   StyledCloseIcon,
   LeftImageContainerStyle,
   RightContentContainerStyle,
   ImageStyle,
   PriceAndQuantityStyle
} from './CartItemStyle'

const CartItem: React.FC<Props> = ({ productName, price, quantity, displayImage }) => (
   <StyledCartItem>
      <StyledCloseIcon>&#10007;</StyledCloseIcon>
      <LeftImageContainerStyle>
         <ImageStyle src={displayImage} alt='' />
      </LeftImageContainerStyle>
      <RightContentContainerStyle>
         <p>{productName}</p>
         <PriceAndQuantityStyle>
            <NumberFormat value={price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            <p>dsdsa</p>
         </PriceAndQuantityStyle>
      </RightContentContainerStyle>
   </StyledCartItem>
)

type Props = {
   productName: string
   price: number
   quantity: number
   displayImage: string
}

export default CartItem
