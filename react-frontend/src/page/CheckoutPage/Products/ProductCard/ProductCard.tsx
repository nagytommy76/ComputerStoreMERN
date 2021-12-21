import React from 'react'
import { CartItemsType } from '../../../../app/slices/helpers/CartSliceHelper'

import { CustomCard, CustomCardContent, CustomCardMedia, FooterSection } from '../ProductStyle'
import NumberFormat from 'react-number-format'

import Typography from '@mui/material/Typography'

const Basket = React.lazy(() => import('../../../Navbar/Cart/CartItem/Basket'))
const DeleteBtn = React.lazy(() => import('./DeleteBtn'))

const ProductCard: React.FC<{ currentCartItem: CartItemsType }> = ({ currentCartItem }) => {
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
               <DeleteBtn itemId={currentCartItem.itemId} />
            </FooterSection>
         </CustomCardContent>
      </CustomCard>
   )
}

export default ProductCard
