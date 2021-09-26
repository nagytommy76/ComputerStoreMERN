import React, { useState, Suspense } from 'react'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { CardGridContainer, PageContainer, RightFlexContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'

import { ProductContext } from '../Context/ShopContext'
import useGetProducts from '../Hooks/useGetProducts'
import useFilter from '../Hooks/UseFilter'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))
const Pagination = React.lazy(() => import('../BaseComponents/Pagination/Pagination'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const Vga = () => {
   const [vgaProducts, setVgaProducts] = useState<VgaType[]>([])
   const { filterOptions, setFilterOptions } = useFilter('vga')
   useGetProducts(filterOptions, setVgaProducts, 'vga')
   return (
      <Suspense fallback={<Container />}>
         <PageContainer>
            <SideFilter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
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
         </PageContainer>
      </Suspense>
   )
}

export default Vga
