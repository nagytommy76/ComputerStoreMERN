import React, { lazy } from 'react'

import { useAppSelector } from '../../../../app/hooks'
import { ProductContext } from '../../Context/ShopContext'

import Container from '../../../../SuspenseComponents/ProductCard/Container'
import { PageContainer, CardGridContainer, RightFlexContainer } from '../../BaseStyleForShopPage'

const ProductCard = lazy(() => import('../ProductCard/ProductCard'))
const Pagination = lazy(() => import('../Pagination/Pagination'))
const CartSnackBar = lazy(() => import('../CartSnackbar/CartSnackbar'))

const BaseShop: React.FC<{ productType: string }> = ({ productType, children }) => {
   const products = useAppSelector(state => state.products.products)

   return (
      <PageContainer>
         <React.Suspense fallback={<Container />}>
            {children}
            <RightFlexContainer>
               <CardGridContainer>
                  {products.map(product => (
                     <ProductContext.Provider
                        key={product._id}
                        value={{
                           _id: product._id,
                           productType,
                           productName: `${product.manufacturer} ${product.type} ${product.typeCode}`,
                           displayImage: product.pictureUrls[0],
                           price: product.price,
                        }}
                     >
                        <ProductCard
                           pathNameForDetailsURL={productType}
                           key={product._id}
                           _id={product._id}
                           details={product.details}
                           itemNumber={product.itemNumber}
                           manufacturer={product.manufacturer}
                           pictureUrls={product.pictureUrls}
                           price={product.price}
                           type={product.type}
                           typeCode={product.typeCode}
                           ratingCount={product.ratingValues?.length}
                        />
                     </ProductContext.Provider>
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
