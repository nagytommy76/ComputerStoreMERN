import React, { useEffect, useState } from 'react'
import { FilterTypes } from '../BaseTypes'
import axios from 'axios'

const useFilter = (productType: string, setIsFilter: (value: React.SetStateAction<boolean>) => void) => {
   const [filterOptions, setFilterOptions] = useState<FilterTypes>({
      allManufacturer: [],
      selectedManufacturer: '',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      selectedPrice: [0, 5000000]
   })

   const getFilterData = async () => {
      const filterData = await axios.get(`${productType}/filter-data`)
      if (filterData.status === 200) {
         setFilterOptions({
            ...filterOptions,
            maxPrice: filterData.data.maxPrice,
            minPrice: filterData.data.minPrice,
            allManufacturer: filterData.data.allManufacturers,
            selectedPrice: [filterData.data.minPrice, filterData.data.maxPrice]
         })
         setIsFilter(true)
      }
   }

   useEffect(() => {
      // https://www.youtube.com/watch?v=Hy5xPk6A1bw&ab_channel=CodingAfterThirty
      getFilterData()
      // eslint-disable-next-line
   }, [])
   return { filterOptions, setFilterOptions }
}

export default useFilter
