import React, { lazy, ReactNode } from 'react'
import { useAppSelector } from '../../../../app/hooks'

import CardContainer from '../../../../SuspenseComponents/ProductCard/Container'
import FilterSuspense from '../../../../SuspenseComponents/SideFilter/FilterSuspense'
import { PageContainer, CardGridContainer, RightFlexContainer } from '../../BaseStyleForShopPage'

import ProductNotFound from './Includes/ProductNotFound'
const ProductCard = lazy(() => import('../ProductCard/ProductCard'))
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
         <RightFlexContainer>
            <ShopHeader productType={productType} productName={productName} />
            <CardGridContainer>
               {isFetchingStatus === 'PENDING' || isFetchingStatus === 'INIT' ? (
                  <CardContainer />
               ) : isFetchingStatus === 'FULFILLED' && products.length < 1 ? (
                  <ProductNotFound />
               ) : (
                  products.map(product => (
                     <React.Suspense key={product._id} fallback={<CardContainer />}>
                        <ProductCard
                           pathNameForDetailsURL={productType}
                           _id={product._id}
                           manufacturer={product.manufacturer}
                           pictureUrls={product.pictureUrls}
                           price={product.price}
                           type={product.type}
                           typeCode={product.typeCode}
                           ratingCount={product.ratingValues?.length}
                        />
                     </React.Suspense>
                  ))
               )}
            </CardGridContainer>
            <Pagination />
            <CartSnackBar />
         </RightFlexContainer>
      </PageContainer>
   )
}

export default BaseShop
