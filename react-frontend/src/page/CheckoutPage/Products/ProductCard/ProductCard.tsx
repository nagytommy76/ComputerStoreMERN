import React from 'react'
import { CartItemsType } from '../../../../app/slices/helpers/CartSliceHelper'
import { useAppDispatch } from '../../../../app/hooks'
import { removeItemsFromCart } from '../../../../app/slices/CartSlice'

import { CustomCard, CustomCardContent, CustomCardMedia, FooterSection } from '../ProductStyle'
import NumberFormat from 'react-number-format'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Basket = React.lazy(() => import('../../../Navbar/Cart/CartItem/Basket'))

const ProductCard: React.FC<{ currentCartItem: CartItemsType }> = ({ currentCartItem }) => {
   const dispatch = useAppDispatch()
   return (
      <CustomCard>
         <CustomCardMedia image={currentCartItem.displayImage} />
         <CustomCardContent>
            <Typography variant='subtitle2' mr='.7rem'>
               {currentCartItem.displayName}
            </Typography>
            <Typography variant='h5' align='right' color='primary'>
               <NumberFormat value={currentCartItem.price} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            </Typography>
            <FooterSection>
               <Basket quaintity={currentCartItem.quantity} id={currentCartItem.itemId} />
               <Button onClick={() => dispatch(removeItemsFromCart(currentCartItem.itemId))} color='error' variant='outlined'>
                  Törlés
               </Button>
            </FooterSection>
         </CustomCardContent>
      </CustomCard>
   )
}

export default ProductCard
