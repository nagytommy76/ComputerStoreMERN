import React, { lazy, ReactNode } from 'react'
import { useAppSelector } from '../../../../app/hooks'

import Container from '../../../../SuspenseComponents/ProductCard/Container'
import { PageContainer, CardGridContainer, RightFlexContainer } from '../../BaseStyleForShopPage'

const ProductCard = lazy(() => import('../ProductCard/ProductCard'))
const Pagination = lazy(() => import('../Pagination/Pagination'))
const CartSnackBar = lazy(() => import('../CartSnackbar/CartSnackbar'))

const BaseShop: React.FC<{ productType: string; children?: ReactNode }> = ({ productType, children }) => {
   const products = useAppSelector(state => state.products.products)

   return (
      <PageContainer>
         <React.Suspense fallback={<Container />}>
            {children}
            <RightFlexContainer>
               <CardGridContainer>
                  {products.map(product => (
                     <ProductCard
                        pathNameForDetailsURL={productType}
                        key={product._id}
                        _id={product._id}
                        manufacturer={product.manufacturer}
                        pictureUrls={product.pictureUrls}
                        price={product.price}
                        type={product.type}
                        typeCode={product.typeCode}
                        ratingCount={product.ratingValues?.length}
                     />
                  ))}
               </CardGridContainer>
               <Pagination />
               <CartSnackBar />
            </RightFlexContainer>
         </React.Suspense>
      </PageContainer>
   )
}

export default BaseShop
