import { useEffect } from 'react'
import axios from 'axios'

import { setTotalPages } from '../../../app/slices/PaginateSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setProducts } from '../../../app/slices/ProductsSlice'

const useGetProducts = (
   productTypeForURL: string,
   isFilter: boolean /*,
stateFilters: { selectedManufacturer: string; selectedPrice: number[] }*/
) => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)
   const filterOptions = useAppSelector((state) => state.filter.filterData)

   const getProductsByQueries = async () => {
      const product = await axios.get(
         `/${productTypeForURL}?currentPage=${currentPage}&perPage=${perPage}&orderBy=${filterOptions.orderBy}&byManufacturer=${filterOptions.selectedManufacturer}&priceRange=${filterOptions.selectedPrice}`,
         {
            data: {
               currentPage,
               perPage,
               filterOptions
            }
         }
      )
      if (product.status === 200) {
         dispatch(setProducts(product.data.allProducts))
         dispatch(setTotalPages(product.data.totalPages))
      }
   }

   useEffect(() => {
      if (isFilter || filterOptions.productType !== productTypeForURL) getProductsByQueries()
      // eslint-disable-next-line
   }, [
      productTypeForURL,
      currentPage,
      perPage,
      filterOptions.selectedManufacturer,
      filterOptions.selectedPrice,
      filterOptions.orderBy
   ])
}

export default useGetProducts
