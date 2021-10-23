import React, { Suspense } from 'react'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { CardGridContainer, PageContainer, RightFlexContainer } from '../BaseStyleForShopPage'

import { ProductContext } from '../Context/ShopContext'
import { useAppSelector } from '../../../app/hooks'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))
const Pagination = React.lazy(() => import('../BaseComponents/Pagination/Pagination'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const Vga = () => {
   const vgaProducts = useAppSelector((state) => state.products.products)
   return (
      <PageContainer>
         <Suspense fallback={<Container />}>
            <SideFilter productType='vga' />
            <RightFlexContainer>
               <CardGridContainer>
                  {vgaProducts.map((product) => (
                     <ProductContext.Provider
                        key={product._id}
                        value={{
                           _id: product._id,
                           productName: `${product.manufacturer} ${product.type} ${product.typeCode}`,
                           price: product.price,
                           displayImage: product.pictureUrls[0]
                        }}>
                        <ProductCard
                           pathNameForDetailsURL='vga'
                           _id={product._id}
                           itemNumber={product.itemNumber}
                           manufacturer={product.manufacturer}
                           pictureUrls={product.pictureUrls}
                           price={product.price}
                           type={product.type}
                           typeCode={product.typeCode}
                           details={product.details}
                           ratingCount={product.ratingValues?.length}
                        />
                     </ProductContext.Provider>
                  ))}
               </CardGridContainer>
               <Pagination />
            </RightFlexContainer>
         </Suspense>
      </PageContainer>
   )
}

export default Vga
