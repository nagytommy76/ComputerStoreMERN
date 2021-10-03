import { useEffect, useState } from 'react'
import { FilterTypes } from '../BaseTypes'
import axios from 'axios'

const useFilter = (productType: string) => {
   const [filterOptions, setFilterOptions] = useState<FilterTypes>({
      allManufacturer: [],
      selectedManufacturer: '',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      selectedPrice: [0, 5000000]
   })
   const fetchFilterData = () => {
      axios
         .get(`${productType}/filter-data`)
         .then((filter) => {
            if (filter.status === 200) {
               setFilterOptions({
                  ...filterOptions,
                  maxPrice: filter.data.maxPrice,
                  minPrice: filter.data.minPrice,
                  allManufacturer: filter.data.allManufacturers,
                  selectedPrice: [filter.data.minPrice, filter.data.maxPrice]
               })
            }
         })
         .catch((error) => console.log(error))
   }
   useEffect(() => {
      fetchFilterData()
      return () => {
         setFilterOptions({
            allManufacturer: [],
            selectedManufacturer: '',
            maxPrice: 200,
            minPrice: 0,
            orderBy: 'asc',
            selectedPrice: [0, 5000000]
         })
      }
      // eslint-disable-next-line
   }, [])
   return { filterOptions, setFilterOptions }
}

export default useFilter
