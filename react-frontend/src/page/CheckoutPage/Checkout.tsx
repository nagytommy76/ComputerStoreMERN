import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { PageContainer } from './BaseStyle'

const AdressForm = React.lazy(() => import('./AdressForm/Adress'))

const Checkout = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <PageContainer isDarkTheme={isDarkTheme}>
         <AdressForm />
         <section>Ez pedig egy termék összegző rész</section>
      </PageContainer>
   )
}

export default Checkout
