import { useCallback, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

import { setTotalPages } from '../../../app/slices/PaginateSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setProducts } from '../../../app/slices/ProductsSlice'
import { setIsPriceRangeSet } from '../../../app/slices/Filter/BaseFilterDataSlice'

const useGetProducts = (productTypeForURL: string, extraQueryParameters: string = '') => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector(state => state.paginate.currentPage)
   const perPage = useAppSelector(state => state.paginate.perPage)
   const isPriceRangeSet = useAppSelector(state => state.filter.isPriceRangeSet)
   const filterOptions = useAppSelector(state => state.filter.filterData)

   const getProductsByQueries = useCallback(async () => {
      try {
         const product: AxiosResponse<{ allProducts: any[]; totalPages: number }, any[]> = await axios.get(
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
   }, [dispatch, currentPage, perPage, filterOptions, productTypeForURL, extraQueryParameters])

   useEffect(() => {
      if (isPriceRangeSet) {
         getProductsByQueries()
      }
   }, [currentPage, perPage, isPriceRangeSet, filterOptions, extraQueryParameters, getProductsByQueries])
}

export default useGetProducts
