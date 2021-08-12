import React from 'react'
import NumberFormat from 'react-number-format'
import Basket from './Basket'
import {
   StyledCartItem,
   StyledCloseIcon,
   LeftImageContainerStyle,
   RightContentContainerStyle,
   ImageStyle,
   PriceAndQuantityStyle
} from './CartItemStyle'
import { useAppDispatch } from '../../../../app/hooks'
import { removeItemsFromCart } from '../../../../app/slices/CartSlice'

const CartItem: React.FC<Props> = ({ id, productName, price, quantity, displayImage }) => {
   const dispatch = useAppDispatch()
   return (
      <StyledCartItem>
         <StyledCloseIcon onClick={() => dispatch(removeItemsFromCart(id))}>&#10007;</StyledCloseIcon>
         <LeftImageContainerStyle>
            <ImageStyle src={displayImage} alt='' />
         </LeftImageContainerStyle>
         <RightContentContainerStyle>
            <p>{productName}</p>
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
