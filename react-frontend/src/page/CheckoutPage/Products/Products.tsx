import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import {
   ProductsContainer,
   ProductCards,
   BackgroundImageStyle,
   CustomCard,
   CustomCardContent,
   CustomCardMedia
} from './ProductStyle'
import { Typography, CardMedia } from '@mui/material'
import NumberFormat from 'react-number-format'
// import AddressFormBacground from './AdressFormBackgound.jpg'
import AddressFormBacground from './AdressBackG.jpg'

const Basket = React.lazy(() => import('../../Navbar/Cart/CartItem/Basket'))
const DeleteIcon = React.lazy(() => import('../../Navbar/Cart/CartItem/DeleteIcon'))
// const AdvancedButton = React.lazy(() => import('../../BaseElements/AdvancedButton/AdvancedButton'))

const Products = () => {
   const itemsInCart = useAppSelector((state) => state.cart.cartItems)
   const totalPrice = useAppSelector((state) => state.cart.totalPrice)
   // const handleNextButton = () => {}

   return (
      <ProductsContainer>
         <BackgroundImageStyle backgroundImage={AddressFormBacground} />
         <ProductCards>
            {itemsInCart.map((cart) => (
               <CustomCard key={cart.itemId}>
                  <DeleteIcon id={cart.itemId} />
                  <CustomCardMedia image={cart.displayImage} />
                  <CustomCardContent>
                     <Typography variant='subtitle2' mr='.7rem'>
                        {cart.displayName}
                     </Typography>
                     <Typography variant='h5' align='right' color='primary'>
                        <NumberFormat value={cart.price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
                     </Typography>
                     <Basket quaintity={cart.quantity} id={cart.itemId} />
                  </CustomCardContent>
               </CustomCard>
            ))}
         </ProductCards>
         <Typography sx={{ zIndex: 3 }} variant='h5' color='primary'>
            Összesen: <NumberFormat value={totalPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
         </Typography>
         {/* <AdvancedButton onClickEvent={handleNextButton}>Rendelés Leadása</AdvancedButton> */}
      </ProductsContainer>
   )
}

export default Products
