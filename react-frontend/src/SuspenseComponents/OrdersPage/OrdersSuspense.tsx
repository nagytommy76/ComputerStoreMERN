import { styled } from '@mui/material'

import { OrdersPageContainer, StyledProduct } from '../../page/Orders/Styles'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'

const ProductSkeleton = () => {
   return (
      <StyledProduct>
         <Skeleton height={200} width={273} animation='wave' variant='rectangular' />
         <div style={{ width: '100%', padding: '0 1.4rem' }}>
            <Skeleton height={35} width={'90%'} animation='wave' variant='text' />
            <Skeleton height={20} sx={{ marginTop: 2 }} width={'20%'} animation='wave' variant='text' />
            <Skeleton height={25} sx={{ marginTop: 2 }} width={'30%'} animation='wave' variant='text' />
         </div>
      </StyledProduct>
   )
}

const OrdersSuspense = () => {
   return (
      <OrdersPageContainer>
         <Paper sx={{ height: '30%' }}>
            <StyledAccordionSummary>
               <Skeleton height={30} sx={{ marginLeft: 2 }} width='35%' animation='wave' variant='text' />
            </StyledAccordionSummary>
            <Skeleton height={20} width={190} animation='wave' sx={{ marginLeft: 2 }} variant='text' />
            <StyledBody>
               <ProductSkeleton />
               <ProductSkeleton />
               <ProductSkeleton />
            </StyledBody>
         </Paper>
      </OrdersPageContainer>
   )
}

export default OrdersSuspense

const StyledBody = styled('div')({
   minHeight: '200px',
   padding: '4px 16px 16px',
})

const StyledAccordionSummary = styled('div')({
   backgroundColor: '#3d5a80',
   width: '100%',
   height: '48px',
   margin: '12px 0',
   display: 'flex',
   alignItems: 'center',
})
