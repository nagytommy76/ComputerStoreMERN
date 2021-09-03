import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductsContainer, ProductCarts } from './ProductStyle'

const CartItem = React.lazy(() => import('../../Navbar/Cart/CartItem/CartItem'))

const Products = () => {
   const itemsInCart = useAppSelector((state) => state.cart.cartItems)
   return (
      <ProductsContainer>
         <ProductCarts>
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
         </ProductCarts>
      </ProductsContainer>
   )
}

export default Products
