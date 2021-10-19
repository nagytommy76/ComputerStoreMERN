import { useEffect } from 'react'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setProducts } from '../../../app/slices/ProductsSlice'
import { setTotalPages } from '../../../app/slices/PaginateSlice'
import {
   setPriceRange,
   setAllManufacturer,
   setMinPrice,
   setMaxPrice,
   setProductType,
   setIsPriceRangeSet
} from '../../../app/slices/FilterDataSlice'

export const useFilterAndProduct = (productType: string) => {
   //    const [isSet, setIsSet] = useState(false)
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter.filterData)
   const isPriceRangeSet = useAppSelector((state) => state.filter.isPriceRangeSet)
   const currentPage = useAppSelector((state) => state.paginate.currentPage)
   const perPage = useAppSelector((state) => state.paginate.perPage)

   const getFilterData = async () => {
      return await axios.get(`${productType}/filter-data`)
   }

   const getProductsByQueries = async () => {
      return await axios.get(
         `/${productType}?currentPage=${currentPage}&perPage=${perPage}&orderBy=${filterOptions.orderBy}&byManufacturer=${filterOptions.selectedManufacturer}&priceRange=${filterOptions.priceRange}`,
         {
            data: {
               currentPage,
               perPage,
               filterOptions
            }
         }
      )
   }

   useEffect(() => {
      if (filterOptions.productType !== productType) {
         getFilterData().then((filterData) => {
            dispatch(setAllManufacturer(filterData.data.allManufacturers))
            dispatch(setMinPrice(filterData.data.minPrice))
            dispatch(setMaxPrice(filterData.data.maxPrice))
            dispatch(setPriceRange([filterData.data.minPrice, filterData.data.maxPrice]))
            dispatch(setIsPriceRangeSet(true))
         })
      }
      dispatch(setProductType(productType))
      // eslint-disable-next-line
   }, [productType])

   useEffect(() => {
      if (isPriceRangeSet) {
         getProductsByQueries().then((product) => {
            if (product.status === 200) {
               dispatch(setProducts(product.data.allProducts))
               dispatch(setTotalPages(product.data.totalPages))
            }
         })
      }
      // eslint-disable-next-line
   }, [
      isPriceRangeSet,
      currentPage,
      perPage,
      filterOptions.selectedManufacturer,
      filterOptions.orderBy,
      filterOptions.priceRange
   ])
}

// https://dev.to/trunghieu99tt/you-don-t-know-useeffect-4j9h
