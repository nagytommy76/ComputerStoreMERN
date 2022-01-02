import React from 'react'

import { CustomCard, CustomCardMedia, FooterSection, CustomCardContent } from '../../page/CheckoutPage/Products/ProductStyle'
import Skeleton from '@mui/material/Skeleton'
import { styled } from '@mui/material'

const ProductCardSuspense = () => {
   return (
      <CustomCard>
         <CustomCardMedia>
            <Skeleton variant='rectangular' animation='wave' height='100%' />
         </CustomCardMedia>
         <CustomCardContent>
            <div>
               <Skeleton variant='text' animation='wave' height={13} />
               <Skeleton variant='text' animation='wave' height={13} />
               <Skeleton variant='text' animation='wave' height={13} width={200} />
            </div>
            <Skeleton variant='text' animation='wave' height={30} width={150} sx={{ alignSelf: 'end' }} />
            <FooterSection>
               <BasketSection>
                  <Skeleton variant='text' animation='wave' height={20} width={20} />
                  <Skeleton variant='text' animation='wave' height={30} width={20} />
                  <Skeleton variant='text' animation='wave' height={20} width={20} />
               </BasketSection>
               <Skeleton variant='rectangular' animation='wave' height={40} width={120} />
            </FooterSection>
         </CustomCardContent>
      </CustomCard>
   )
}

const BasketSection = styled('section')({
   width: '40%',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between'
})

export default ProductCardSuspense
