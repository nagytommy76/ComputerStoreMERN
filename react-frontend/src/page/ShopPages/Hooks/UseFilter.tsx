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
               console.log('LEFUTOTTAM USE_FILTER')
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
      // const cancelTokenSource = axios.CancelToken.source()
      // https://www.youtube.com/watch?v=Hy5xPk6A1bw&ab_channel=CodingAfterThirty
      // fetchFilterData()
      const testFunction = async () => {
         const filterData = await axios.get(`${productType}/filter-data`)
         if (filterData.status === 200) {
            console.log('LEFUTOTTAM USE_FILTER')
            setFilterOptions({
               ...filterOptions,
               maxPrice: filterData.data.maxPrice,
               minPrice: filterData.data.minPrice,
               allManufacturer: filterData.data.allManufacturers,
               selectedPrice: [filterData.data.minPrice, filterData.data.maxPrice]
            })
         }
      }
      testFunction()
      // eslint-disable-next-line
      return () => {}
   }, [])
   return { filterOptions, setFilterOptions }
}

export default useFilter
