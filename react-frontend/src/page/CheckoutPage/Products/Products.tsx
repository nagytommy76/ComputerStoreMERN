import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductsContainer, ProductCards, BackgroundImageStyle } from './ProductStyle'

// import AddressFormBacground from './AdressFormBackgound.jpg'
import AddressFormBacground from './AdressBackG.jpg'

const CartItem = React.lazy(() => import('../../Navbar/Cart/CartItem/CartItem'))

const Products = () => {
   const itemsInCart = useAppSelector((state) => state.cart.cartItems)

   return (
      <ProductsContainer>
         <BackgroundImageStyle backgroundImage={AddressFormBacground} />
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
