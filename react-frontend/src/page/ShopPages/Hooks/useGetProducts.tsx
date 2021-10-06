import React, { useEffect, useCallback } from 'react'
import axios from 'axios'
import { FilterTypes } from '../BaseTypes'

import { setTotalPages } from '../../../app/slices/PaginateSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

const useGetProducts = (
   filterOptions: FilterTypes,
   setProducts: (value: React.SetStateAction<any[]>) => void,
   productTypeForURL: string,
   isFilter: boolean
) => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)

   const testFunction = useCallback(async () => {
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
      }
   }, [currentPage, perPage, filterOptions, productTypeForURL])

   useEffect(() => {
      if (isFilter) testFunction()
      // Megoldani, hogy ne 2szer küldjön request-et: 1szer a default adatokkal, 1szer meg amikor a selectedPrice beállítódik...
      // eslint-disable-next-line
   }, [currentPage, perPage, filterOptions.orderBy, filterOptions.selectedManufacturer, filterOptions.selectedPrice, isFilter])
}

export default useGetProducts
