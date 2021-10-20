import { useEffect } from 'react'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
   setAllManufacturer,
   setMinPrice,
   setMaxPrice,
   setProductType,
   setPriceRange,
   setIsPriceRangeSet
} from '../../../app/slices/FilterDataSlice'

const useFilter = (productType: string) => {
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter.filterData)
   const isPriceRangeSet = useAppSelector((state) => state.filter.isPriceRangeSet)

   const getFilterData = async () => {
      const filterData = await axios.get(`${productType}/filter-data`)
      if (filterData.status === 200) {
         dispatch(setAllManufacturer(filterData.data.allManufacturers))
         dispatch(setMinPrice(filterData.data.minPrice))
         dispatch(setMaxPrice(filterData.data.maxPrice))
         dispatch(setPriceRange([filterData.data.minPrice, filterData.data.maxPrice]))
         dispatch(setIsPriceRangeSet(true))
      }
   }

   useEffect(() => {
      if (filterOptions.productType !== productType) {
         getFilterData()
      }
      dispatch(setProductType(productType))
      // eslint-disable-next-line
   }, [productType, isPriceRangeSet])
}

export default useFilter

// https://www.youtube.com/watch?v=Hy5xPk6A1bw&ab_channel=CodingAfterThirty
// https://dev.to/trunghieu99tt/you-don-t-know-useeffect-4j9h
