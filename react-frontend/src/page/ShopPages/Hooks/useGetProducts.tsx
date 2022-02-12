import { useEffect } from 'react'
import axios from 'axios'

import { setTotalPages } from '../../../app/slices/PaginateSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setProducts } from '../../../app/slices/ProductsSlice'
import { setIsPriceRangeSet } from '../../../app/slices/Filter/BaseFilterDataSlice'

const useGetProducts = (
   productTypeForURL: string,
   sideEffectTrigger: any,
   extraQueryParameters: string = ''
) => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector(state => state.paginate.currentPage)
   const perPage = useAppSelector(state => state.paginate.perPage)
   const isPriceRangeSet = useAppSelector(state => state.filter.isPriceRangeSet)
   const filterOptions = useAppSelector(state => state.filter.filterData)

   const getProductsByQueries = async () => {
      try {
         const product = await axios.get(
            `/${productTypeForURL}?currentPage=${currentPage}&perPage=${perPage}&orderBy=${filterOptions.orderBy}&byManufacturer=${filterOptions.selectedManufacturer}&priceRange=${filterOptions.priceRange}${extraQueryParameters}`,
            {
               data: {
                  currentPage,
                  perPage,
                  filterOptions,
               },
            }
         )
         if (product.status === 200) {
            dispatch(setProducts(product.data.allProducts))
            dispatch(setTotalPages(product.data.totalPages))
            dispatch(setIsPriceRangeSet(false))
         }
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      if (isPriceRangeSet) {
         getProductsByQueries()
      }
      // eslint-disable-next-line
   }, [
      currentPage,
      perPage,
      isPriceRangeSet,
      filterOptions.selectedManufacturer,
      filterOptions.priceRange,
      filterOptions.orderBy,
      sideEffectTrigger,
   ])
}

export default useGetProducts
