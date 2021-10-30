import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
   ProductsContainer,
   ProductCards,
   CustomCard,
   CustomCardContent,
   CustomCardMedia,
   FooterSection,
   PriceSection
} from './ProductStyle'
import { Typography, Button } from '@mui/material'
import NumberFormat from 'react-number-format'
// import AddressFormBacground from './AdressFormBackgound.jpg'
import AddressFormBacground from './AdressBackG.jpg'
import { removeItemsFromCart } from '../../../app/slices/CartSlice'

const Basket = React.lazy(() => import('../../Navbar/Cart/CartItem/Basket'))
// const AdvancedButton = React.lazy(() => import('../../BaseElements/AdvancedButton/AdvancedButton'))

const Products = () => {
   const dispatch = useAppDispatch()
   const itemsInCart = useAppSelector((state) => state.cart.cartItems)
   const totalPrice = useAppSelector((state) => state.cart.totalPrice)
   // const handleNextButton = () => {}

   return (
      <ProductsContainer backgroundImage={AddressFormBacground}>
         <ProductCards>
            {itemsInCart.map((cart) => (
               <CustomCard key={cart.itemId}>
                  <CustomCardMedia image={cart.displayImage} />
                  <CustomCardContent>
                     <Typography variant='subtitle2' mr='.7rem'>
                        {cart.displayName}
                     </Typography>
                     <Typography variant='h5' align='right' color='primary'>
                        <NumberFormat value={cart.price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
                     </Typography>
                     <FooterSection>
                        <Basket quaintity={cart.quantity} id={cart.itemId} />
                        <Button onClick={() => dispatch(removeItemsFromCart(cart.itemId))} color='error' variant='outlined'>
                           Törlés
                        </Button>
                     </FooterSection>
                  </CustomCardContent>
               </CustomCard>
            ))}
         </ProductCards>
         <PriceSection variant='h5' color='primary'>
            Összesen: <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </PriceSection>
         {/* <AdvancedButton onClickEvent={handleNextButton}>Rendelés Leadása</AdvancedButton> */}
      </ProductsContainer>
   )
}

export default Products
