import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { PageContainer } from './BaseStyle'

const Checkout = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <PageContainer isDarkTheme={isDarkTheme}>
         <h1>Checkout oldal</h1>
      </PageContainer>
   )
}

export default Checkout
