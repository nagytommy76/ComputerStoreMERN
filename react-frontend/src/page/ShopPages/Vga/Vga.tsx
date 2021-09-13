import axios from 'axios'
import React, { useEffect, useState, Suspense } from 'react'
import { CardGridContainer, PageContainer, RightFlexContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'
import { VgaProductContext } from './VgaContext/VgaProductContext'
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
   const [filterOptions, setFilterOptions] = useState<FilterTypes>({
      allManufacturer: [],
      selectedManufacturer: '',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      selectedPrice: 0
   })
   useEffect(() => {
      axios
         .get(`/vga/filter-data`)
         .then((filterData) => {
            setFilterOptions({
               ...filterOptions,
               maxPrice: filterData.data.maxPrice,
               minPrice: filterData.data.minPrice,
               allManufacturer: filterData.data.allManufacturers,
               selectedPrice: filterData.data.minPrice
            })
         })
         .catch((error) => console.log(error))
      // eslint-disable-next-line
   }, [])
   useEffect(() => {
      axios
         .get(
            `/vga?currentPage=${currentPage}&perPage=${perPage}&orderBy=${filterOptions.orderBy}&byManufacturer=${filterOptions.selectedManufacturer}`,
            {
               data: {
                  currentPage,
                  perPage,
                  filterOptions
               }
            }
         )
         .then((vgas) => {
            setVgaProducts(vgas.data.allProducts)
            dispatch(setTotalPages(vgas.data.totalPages))
         })
         .catch((error) => console.log(error))
      return () => {}
      // eslint-disable-next-line
   }, [currentPage, perPage, filterOptions.orderBy, filterOptions.selectedManufacturer])
   return (
      <Suspense fallback={<Container />}>
         <PageContainer>
            <SideFilter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
            <RightFlexContainer>
               <CardGridContainer>
                  {vgaProducts.map((product) => (
                     <VgaProductContext.Provider
                        key={product._id}
                        value={{
                           _id: product._id,
                           productName: `${product.manufacturer} ${product.type} ${product.typeCode}`,
                           price: product.price,
                           displayImage: product.pictureUrls[0]
                        }}>
                        <ProductCard
                           _id={product._id}
                           itemNumber={product.itemNumber}
                           manufacturer={product.manufacturer}
                           pictureUrls={product.pictureUrls}
                           price={product.price}
                           type={product.type}
                           typeCode={product.typeCode}
                           details={product.details}
                        />
                     </VgaProductContext.Provider>
                  ))}
               </CardGridContainer>
               <Pagination />
            </RightFlexContainer>
         </PageContainer>
      </Suspense>
   )
}

export type FilterTypes = {
   orderBy: string
   minPrice: number
   maxPrice: number
   selectedPrice: number
   allManufacturer: string[]
   selectedManufacturer: string
}

export default Vga
