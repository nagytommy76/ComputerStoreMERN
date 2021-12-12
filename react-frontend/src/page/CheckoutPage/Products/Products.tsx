import React, { useEffect } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductsContainer, ProductCards, PriceSection } from './ProductStyle'

import NumberFormat from 'react-number-format'
import AddressFormBacground from './AdressBackG.jpg'
import { useNavigate } from 'react-router-dom'

const ProductCard = React.lazy(() => import('./ProductCard/ProductCard'))

const Products = () => {
   let navigate = useNavigate()
   const itemsInCart = useAppSelector((state) => state.cart.cartItems)
   const totalPrice = useAppSelector((state) => state.cart.totalPrice)
   const deliveryPrice = useAppSelector((state) => state.deliveryPrice.deliveryPrice)
   useEffect(() => {
      if (itemsInCart.length === 0) navigate('/')
   }, [itemsInCart.length, navigate])

   return (
      <ProductsContainer backgroundImage={AddressFormBacground}>
         <ProductCards>
            {itemsInCart.map((cart) => (
               <ProductCard key={cart.itemId} currentCartItem={cart} />
            ))}
         </ProductCards>
         <PriceSection variant='h4' color='primary'>
            Összesen: <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </PriceSection>
         <PriceSection variant='h5' color='primary'>
            Szállítási díj: <NumberFormat value={deliveryPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </PriceSection>
      </ProductsContainer>
   )
}

export default Products
