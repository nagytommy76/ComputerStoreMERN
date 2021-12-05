import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductsContainer, ProductCards, PriceSection } from './ProductStyle'

import NumberFormat from 'react-number-format'
import AddressFormBacground from './AdressBackG.jpg'

const ProductCard = React.lazy(() => import('./ProductCard/ProductCard'))

const Products = () => {
   const itemsInCart = useAppSelector((state) => state.cart.cartItems)
   const totalPrice = useAppSelector((state) => state.cart.totalPrice)

   return (
      <ProductsContainer backgroundImage={AddressFormBacground}>
         <ProductCards>
            {itemsInCart.map((cart) => (
               <ProductCard key={cart.itemId} currentCartItem={cart} />
            ))}
         </ProductCards>
         <PriceSection variant='h5' color='primary'>
            Összesen: <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </PriceSection>
      </ProductsContainer>
   )
}

export default Products
