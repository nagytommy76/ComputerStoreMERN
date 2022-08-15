import { useEffect } from 'react'

import useGetProductsByQueries from './useGetProductsByQueries'
import { useAppSelector } from '../../../app/hooks'

const useGetProducts = (productTypeForURL: string, extraQueryParameters: string = '') => {
   const currentPage = useAppSelector(state => state.paginate.currentPage)
   const perPage = useAppSelector(state => state.paginate.perPage)
   const isPriceRangeSet = useAppSelector(state => state.filter.isPriceRangeSet)
   const filterOptions = useAppSelector(state => state.filter.filterData)

   const getProductsByQueries = useGetProductsByQueries(productTypeForURL, extraQueryParameters)

   useEffect(() => {
      if (isPriceRangeSet) {
         getProductsByQueries()
      }
   }, [currentPage, perPage, isPriceRangeSet, filterOptions, extraQueryParameters, getProductsByQueries])
}

export default useGetProducts
