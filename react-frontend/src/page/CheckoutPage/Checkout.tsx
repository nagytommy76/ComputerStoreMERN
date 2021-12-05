import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { PageContainer } from './BaseStyle'

const AdressForm = React.lazy(() => import('./AdressForm/Adress'))
const Products = React.lazy(() => import('./Products/Products'))
const MakeOrder = React.lazy(() => import('./MakeOrder/MakeOrder'))

const Checkout = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <PageContainer isDarkTheme={isDarkTheme}>
         <AdressForm />
         <Products />
         <MakeOrder />
      </PageContainer>
   )
}

export default Checkout
