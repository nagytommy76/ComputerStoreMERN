import React, { lazy, ReactNode } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import MessageContextProvider from '../Context/MessageContext'

import CardContainer from '../../../../SuspenseComponents/ProductCard/Container'
import FilterSuspense from '../../../../SuspenseComponents/SideFilter/FilterSuspense'
import { PageContainer, CardGridContainer, RightFlexContainer } from '../../BaseStyleForShopPage'

import ProductNotFound from './Includes/ProductNotFound'
import ProductCard from '../ProductCard/ProductCard'
const Compare = lazy(() => import('./Includes/CompareButton'))
const Pagination = lazy(() => import('../Pagination/Pagination'))
const CartSnackBar = lazy(() => import('../CartSnackbar/CartSnackbar'))
const ShopHeader = lazy(() => import('./Includes/ShopHeader'))

const BaseShop: React.FC<{ productName?: string; productType: string; children?: ReactNode }> = ({
   productName = '',
   productType,
   children,
}) => {
   const { isFetchingStatus, products } = useAppSelector(state => state.products)

   return (
      <PageContainer>
         <React.Suspense fallback={<FilterSuspense />}>{children}</React.Suspense>
         <MessageContextProvider>
            <RightFlexContainer>
               <ShopHeader productType={productType} productName={productName} />
               <CardGridContainer>
                  {isFetchingStatus === 'PENDING' || isFetchingStatus === 'INIT' ? (
                     <CardContainer />
                  ) : isFetchingStatus === 'FULFILLED' && products.length < 1 ? (
                     <ProductNotFound />
                  ) : (
                     products.map(product => (
                        <ProductCard
                           key={product._id}
                           pathNameForDetailsURL={productType}
                           _id={product._id}
                           manufacturer={product.manufacturer}
                           pictureUrls={product.pictureUrls}
                           price={product.price}
                           type={product.type}
                           typeCode={product.typeCode}
                           ratingCount={product.ratingValues?.length}
                        />
                     ))
                  )}
               </CardGridContainer>
               <Pagination />
               <CartSnackBar />
               <Compare />
            </RightFlexContainer>
         </MessageContextProvider>
      </PageContainer>
   )
}

export default BaseShop
