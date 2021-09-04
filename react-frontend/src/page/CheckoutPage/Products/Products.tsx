import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductsContainer, ProductCards, SummaryHeading } from './ProductStyle'

const CartItem = React.lazy(() => import('../../Navbar/Cart/CartItem/CartItem'))

const Products = () => {
   const itemsInCart = useAppSelector((state) => state.cart.cartItems)
   return (
      <ProductsContainer>
         <SummaryHeading>Kosár tartalma</SummaryHeading>
         <ProductCards>
            {itemsInCart.map((cart) => (
               <CartItem
                  key={cart.itemId}
                  id={cart.itemId}
                  displayImage={cart.displayImage}
                  price={cart.price}
                  productName={cart.displayName}
                  quantity={cart.quantity}
               />
            ))}
         </ProductCards>
      </ProductsContainer>
   )
}

export default Products
