import axios from 'axios'
import React, { useEffect, useState, Suspense } from 'react'
import { CardGridContainer, PageContainer, RightFlexContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'
import { VgaContext } from './VgaContext/VgaContext'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setTotalPages } from '../../../app/slices/PaginateSlice'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))
const Pagination = React.lazy(() => import('../BaseComponents/Pagination/Pagination'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const Vga = () => {
   const dispatch = useAppDispatch()
   const [vgaProducts, setVgaProducts] = useState<VgaType[]>([])

   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)
   const [orderBy, setOrderBy] = useState<string>('asc')
   const [minPrice, setMinPrice] = useState<number>(0)
   const [maxPrice, setMaxPrice] = useState<number>(200)
   const [selectedPrice, setSelectedPrice] = useState<number>(0)

   useEffect(() => {
      axios
         .get(`/vga?currentPage=${currentPage}&perPage=${perPage}&orderBy=${orderBy}`)
         .then((vgas) => {
            setVgaProducts(vgas.data.allProducts)
            setMinPrice(vgas.data.minPrice)
            setSelectedPrice(vgas.data.minPrice)
            setMaxPrice(vgas.data.maxPrice)
            dispatch(setTotalPages(vgas.data.totalPages))
         })
         .catch((error) => console.log(error))
   }, [currentPage, perPage, dispatch, selectedPrice, orderBy])
   return (
      <Suspense fallback={<Container />}>
         <PageContainer>
            <SideFilter
               setOrderBy={setOrderBy}
               maxPrice={maxPrice}
               minPrice={minPrice}
               selectedPrice={selectedPrice}
               setSelectedPrice={setSelectedPrice}
            />
            <RightFlexContainer>
               <CardGridContainer>
                  {vgaProducts.map((product) => (
                     <VgaContext.Provider
                        key={product._id}
                        value={{
                           _id: product._id,
                           productName: `${product.manufacturer} ${product.type} ${product.typeCode}`,
                           price: product.price,
                           displayImage: product.pictureUrls[0]
                        }}>
                        <ProductCard
                           key={product._id}
                           _id={product._id}
                           itemNumber={product.itemNumber}
                           manufacturer={product.manufacturer}
                           pictureUrls={product.pictureUrls}
                           price={product.price}
                           type={product.type}
                           typeCode={product.typeCode}
                           details={product.details}
                        />
                     </VgaContext.Provider>
                  ))}
               </CardGridContainer>
               <Pagination />
            </RightFlexContainer>
         </PageContainer>
      </Suspense>
   )
}

export default Vga
