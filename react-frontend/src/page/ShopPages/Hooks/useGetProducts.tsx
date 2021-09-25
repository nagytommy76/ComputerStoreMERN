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
            `/${productTypeForURL}?currentPage=${currentPage}&perPage=${perPage}&orderBy=${filterOptions.orderBy}&byManufacturer=${filterOptions.selectedManufacturer}&priceRange=${filterOptions.selectedPrice}`,
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
      // Megoldani, hogy ne 2szer küldjön request-et: 1szer a default adatokkal, 1szer meg amikor a selectedPrice beállítódik...
      // eslint-disable-next-line
   }, [currentPage, perPage, filterOptions.orderBy, filterOptions.selectedManufacturer, filterOptions.selectedPrice])
}

export default useGetProducts
