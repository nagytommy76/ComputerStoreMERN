import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { PageContainer } from './BaseStyle'

const AdressForm = React.lazy(() => import('./AdressForm/Adress'))
const Products = React.lazy(() => import('./Products/Products'))

const Checkout = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <PageContainer isDarkTheme={isDarkTheme}>
         <AdressForm />
         <Products />
      </PageContainer>
   )
}

export default Checkout
