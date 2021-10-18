import React, { useEffect } from 'react'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setAllManufacturer, setMinPrice, setMaxPrice, setProductType, setPriceRange } from '../../../app/slices/FilterDataSlice'

const useFilter = (
   productType: string,
   setIsFilter: (value: React.SetStateAction<boolean>) => void,
   setIsPriceRangeSet: (value: React.SetStateAction<boolean>) => void
) => {
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter.filterData)

   const getFilterData = async () => {
      const filterData = await axios.get(`${productType}/filter-data`)
      if (filterData.status === 200) {
         dispatch(setAllManufacturer(filterData.data.allManufacturers))
         dispatch(setMinPrice(filterData.data.minPrice))
         dispatch(setMaxPrice(filterData.data.maxPrice))

         // if (filterData.data.minPrice == filterOptions.priceRange[0]) {
         dispatch(setPriceRange([filterData.data.minPrice, filterData.data.maxPrice]))
         // setIsPriceRangeSet(true)
         // }
      }
   }

   // Azt szeretném, ha termék oldal váltás van lefusson a useFilter, viszont ha egy termék részletek oldalról térek vissza
   // (nem változik a termék típus ( productType )) akkor ne fusson le....

   useEffect(() => {
      // https://www.youtube.com/watch?v=Hy5xPk6A1bw&ab_channel=CodingAfterThirty
      if (filterOptions.productType !== productType) {
         getFilterData()
         dispatch(setProductType(productType))
      }
      setIsFilter(true)
      // eslint-disable-next-line
   }, [productType])
}

export default useFilter
