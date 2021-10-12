import React, { useEffect } from 'react'
// import { FilterTypes } from '../BaseTypes'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
   setAllManufacturer,
   setMinPrice,
   setMaxPrice,
   setProductType,
   /*setSelectedManufacturer,*/
   setPriceRange
} from '../../../app/slices/FilterDataSlice'

const useFilter = (productType: string, setIsFilter: (value: React.SetStateAction<boolean>) => void) => {
   // const [filters, setFilters] = useState<{ selectedPrice: number[]; selectedManufacturer: string }>({
   //    selectedManufacturer: 'all',
   //    selectedPrice: [0, 5000000]
   // })
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter.filterData)

   const getFilterData = async () => {
      // dispatch(setSelectedManufacturer('all'))
      const filterData = await axios.get(`${productType}/filter-data`)
      if (filterData.status === 200) {
         dispatch(setAllManufacturer(filterData.data.allManufacturers))
         dispatch(setMinPrice(filterData.data.minPrice))
         dispatch(setMaxPrice(filterData.data.maxPrice))
         // setFilters({
         //    ...filters,
         //    selectedPrice: [filterData.data.minPrice, filterData.data.maxPrice]
         // })
         dispatch(setPriceRange([filterData.data.minPrice, filterData.data.maxPrice]))
         // setIsFilter(true)
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
   // return { filters, setFilters }
}

export default useFilter
