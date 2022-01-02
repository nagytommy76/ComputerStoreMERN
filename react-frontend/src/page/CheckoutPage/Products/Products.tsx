import React, { useEffect, Suspense } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { ProductsContainer, ProductCards, PriceSection } from './ProductStyle'

import NumberFormat from 'react-number-format'
import AddressFormBacground from './AdressBackG.jpg'
import { useNavigate } from 'react-router-dom'

import ProductCardSuspense from '../../../SuspenseComponents/CheckoutPage/ProductCardSuspense'
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
               <Suspense key={cart.itemId} fallback={<ProductCardSuspense />}>
                  <ProductCard currentCartItem={cart} />
               </Suspense>
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
