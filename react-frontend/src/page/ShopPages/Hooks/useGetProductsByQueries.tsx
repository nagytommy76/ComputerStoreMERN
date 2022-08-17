import { useCallback } from 'react'
import { axiosInstance as axios, AxiosResponse } from '../../../AxiosSetup/AxiosInstance'

import { setTotalPages } from '../../../app/slices/PaginateSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setProducts, setIsFetching, setTotalProductCount } from '../../../app/slices/ProductsSlice'
import { setIsPriceRangeSet } from '../../../app/slices/Filter/BaseFilterDataSlice'

const useGetProductsByQueries = (productTypeForURL: string, extraQueryParameters: string = '') => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector(state => state.paginate.currentPage)
   const perPage = useAppSelector(state => state.paginate.perPage)
   const filterOptions = useAppSelector(state => state.filter.filterData)

   const getProductsByQueries = useCallback(async () => {
      dispatch(setIsFetching(true))
      try {
         const product: AxiosResponse<
            { allProducts: any[]; totalPages: number; totalProductCount: number },
            any[]
         > = await axios.get(
            `/${productTypeForURL}?currentPage=${currentPage}&perPage=${perPage}&orderBy=${
               filterOptions.orderBy
            }&byManufacturer=${filterOptions.selectedManufacturer}&priceRange=${
               filterOptions.priceRange
            }&selectedWarranty=${
               filterOptions.selectedWarranty
            }&productName=${filterOptions.productName.trim()}${extraQueryParameters}`,
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
            dispatch(setTotalProductCount(product.data.totalProductCount))
            dispatch(setIsPriceRangeSet(false))
            dispatch(setIsFetching(false))
         }
      } catch (error) {
         console.log(error)
         dispatch(setIsFetching(false))
      }
   }, [dispatch, currentPage, perPage, filterOptions, productTypeForURL, extraQueryParameters])

   return getProductsByQueries
}

export default useGetProductsByQueries
