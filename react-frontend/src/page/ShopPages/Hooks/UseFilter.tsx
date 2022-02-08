import { useEffect } from 'react'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
   setAllManufacturer,
   setMinPrice,
   setMaxPrice,
   setProductType,
   setPriceRange,
   setIsPriceRangeSet,
} from '../../../app/slices/Filter/BaseFilterDataSlice'
import { setToDefault } from '../../../app/slices/PaginateSlice'

const useFilter = (productType: string, extraFilterDispatches?: (params: any) => void) => {
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector(state => state.filter.filterData)
   const isPriceRangeSet = useAppSelector(state => state.filter.isPriceRangeSet)

   const getFilterData = async () => {
      try {
         const filterData = await axios.get(`${productType}/filter-data`)
         if (filterData.status === 200) {
            dispatch(setAllManufacturer(filterData.data.allManufacturers))
            dispatch(setMinPrice(filterData.data.minPrice))
            dispatch(setMaxPrice(filterData.data.maxPrice))
            dispatch(setPriceRange([filterData.data.minPrice, filterData.data.maxPrice]))
            dispatch(setIsPriceRangeSet(true))
            dispatch(setToDefault())
            // Parameterként át kéne adni az egész filterData-t, majd kiszedni az adatokat a shop-ban!?
            extraFilterDispatches &&
               extraFilterDispatches({
                  allMemoryTypes: ['egyelőre', 'semmi'],
                  frequencyRanges: [2666, 6000],
                  allCapacities: [2, 4],
               })
         }
      } catch (error) {
         console.log(error)
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
