import { useEffect, useState } from 'react'
import { FilterTypes } from '../ShopPages/BaseTypes'
import axios from 'axios'

const useFilter = (productType: string) => {
   const [filterOptions, setFilterOptions] = useState<FilterTypes>({
      allManufacturer: [],
      selectedManufacturer: '',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      selectedPrice: 0
   })
   useEffect(() => {
      axios.get(`${productType}/filter-data`).then((filter) => {
         setFilterOptions({
            ...filterOptions,
            maxPrice: filter.data.maxPrice,
            minPrice: filter.data.minPrice,
            allManufacturer: filter.data.allManufacturers,
            selectedPrice: filter.data.minPrice
         })
      })
      // eslint-disable-next-line
   }, [])
   return { filterOptions, setFilterOptions }
}

export default useFilter
