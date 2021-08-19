import axios from 'axios'
import React, { useEffect, useState, Suspense } from 'react'
import { CardGridContainer, PageContainer } from '../BaseStyleForShopPage'
import { VgaType } from './VgaTypes'
import { VgaContext } from './VgaContext/VgaContext'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setTotalPages } from '../../../app/slices/PaginateSlice'

const ProductCard = React.lazy(() => import('../BaseComponents/ProductCard/ProductCard'))
const Pagination = React.lazy(() => import('../BaseComponents/Pagination/Pagination'))

const Vga = () => {
   const dispatch = useAppDispatch()
   const [vgaProducts, setVgaProducts] = useState<VgaType[]>([])

   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)

   useEffect(() => {
      axios
         .get(`/vga?currentPage=${currentPage}&perPage=${perPage}`)
         .then((vgas) => {
            setVgaProducts(vgas.data.allProducts)
            dispatch(setTotalPages(vgas.data.totalPages))
         })
         .catch((error) => console.log(error))
   }, [currentPage, perPage, dispatch])
   return (
      <Suspense fallback={<Container />}>
         <PageContainer>
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
         </PageContainer>
      </Suspense>
   )
}

export default Vga
