import React, { useEffect } from 'react'
import axios from 'axios'
import { FilterTypes } from '../BaseTypes'

import { setTotalPages } from '../../../app/slices/PaginateSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setIsProductLoading } from '../../../app/slices/SuspenseSlice'

const useGetProducts = (
   filterOptions: FilterTypes,
   setProducts: (value: React.SetStateAction<any[]>) => void,
   productTypeForURL: string,
   isFilter: boolean
) => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)

   const getProductsByQueries = async () => {
      dispatch(setIsProductLoading(true))
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
         setProducts(product.data.allProducts)
         dispatch(setTotalPages(product.data.totalPages))
         dispatch(setIsProductLoading(false))
      }
   }

   useEffect(() => {
      if (isFilter) getProductsByQueries()
      // eslint-disable-next-line
   }, [currentPage, perPage, filterOptions, isFilter])
}

export default useGetProducts
