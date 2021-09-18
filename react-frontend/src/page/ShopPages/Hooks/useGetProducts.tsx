import React, { useEffect } from 'react'
import axios from 'axios'
import { FilterTypes } from '../BaseTypes'

import { setTotalPages } from '../../../app/slices/PaginateSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

const useGetProducts = (
   filterOptions: FilterTypes,
   setProducts: (value: React.SetStateAction<any[]>) => void,
   productTypeForURL: string
) => {
   const dispatch = useAppDispatch()
   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)

   useEffect(() => {
      axios
         .get(
            `/${productTypeForURL}?currentPage=${currentPage}&perPage=${perPage}&orderBy=${filterOptions.orderBy}&byManufacturer=${filterOptions.selectedManufacturer}&minPrice=${filterOptions.selectedPrice}`,
            {
               data: {
                  currentPage,
                  perPage,
                  filterOptions
               }
            }
         )
         .then((product) => {
            setProducts(product.data.allProducts)
            dispatch(setTotalPages(product.data.totalPages))
         })
         .catch((error) => console.log(error))
      // eslint-disable-next-line
   }, [currentPage, perPage, filterOptions.orderBy, filterOptions.selectedManufacturer])
}

export default useGetProducts
