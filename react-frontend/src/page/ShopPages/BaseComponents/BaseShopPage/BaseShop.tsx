import React, { lazy } from 'react'

import { useAppSelector } from '../../../../app/hooks'
import { ProductContext } from '../../Context/ShopContext'

import Container from '../../../../SuspenseComponents/ProductCard/Container'
import { PageContainer, CardGridContainer, RightFlexContainer } from '../../BaseStyleForShopPage'

const SideFilter = lazy(() => import('../SideFilter/SideFilter'))
const ProductCard = React.lazy(() => import('../ProductCard/ProductCard'))
const Pagination = React.lazy(() => import('../Pagination/Pagination'))
const CartSnackBar = React.lazy(() => import('../CartSnackbar/CartSnackbar'))

const BaseShop: React.FC<{ productType: string }> = ({ productType }) => {
   const products = useAppSelector((state) => state.products.products)

   return (
      <PageContainer>
         <React.Suspense fallback={<Container />}>
            <SideFilter productType={productType} />
            <RightFlexContainer>
               <CardGridContainer>
                  {products.map((product) => (
                     <ProductContext.Provider
                        key={product._id}
                        value={{
                           _id: product._id,
                           productName: `${product.manufacturer} ${product.type} ${product.typeCode}`,
                           price: product.price,
                           displayImage: product.pictureUrls[0],
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
