import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { PageContainer } from './BaseStyle'

const Products = React.lazy(() => import('./Products/Products'))
const MakeOrderButton = React.lazy(() => import('./MakeOrder/MakeOrder'))
const LeftStepsContainer = React.lazy(() => import('./Steps/LeftStepsContainer'))

const Checkout = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   return (
      <PageContainer isDarkTheme={isDarkTheme}>
         <LeftStepsContainer />
         <Products />
         <MakeOrderButton />
      </PageContainer>
   )
}

// https://mui.com/components/steppers/#linear

export default Checkout
