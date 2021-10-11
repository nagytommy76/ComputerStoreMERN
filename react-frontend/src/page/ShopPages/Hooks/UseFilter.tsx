import React, { useEffect } from 'react'
// import { FilterTypes } from '../BaseTypes'
import axios from 'axios'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { setAllManufacturer, setMinPrice, setMaxPrice } from '../../../app/slices/FilterDataSlice'

const useFilter = (productType: string, setIsFilter: (value: React.SetStateAction<boolean>) => void) => {
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter.filterData)
   // const [filterOptions, setFilterOptions] = useState<FilterTypes>({
   //    allManufacturer: [],
   //    selectedManufacturer: '',
   //    maxPrice: 200,
   //    minPrice: 0,
   //    orderBy: 'asc',
   //    selectedPrice: [0, 5000000]
   // })

   const getFilterData = async () => {
      const filterData = await axios.get(`${productType}/filter-data`)
      if (filterData.status === 200) {
         // dispatch(
         // setFilterOptions({
         //    ...filterOptions,
         //    maxPrice: filterData.data.maxPrice,
         //    minPrice: filterData.data.minPrice,
         //    allManufacturer: filterData.data.allManufacturers,
         //    selectedPrice: [filterData.data.minPrice, filterData.data.maxPrice]
         // })
         dispatch(setAllManufacturer(filterData.data.allManufacturers))
         dispatch(setMinPrice(filterData.data.minPrice))
         dispatch(setMaxPrice(filterData.data.maxPrice))
         // setIsFilter(true)
         // setFilterOptions(filterData.data)
         // )
      }
   }

   // Azt szeretném, ha termék oldal váltás van lefusson a useFilter, viszont ha egy termék részletek oldalról térek vissza
   // (nem változik a termék típus ( productType )) akkor ne fusson le....

   useEffect(() => {
      // https://www.youtube.com/watch?v=Hy5xPk6A1bw&ab_channel=CodingAfterThirty
      setIsFilter(true)
      console.log('Lefutok USE_FILTER??')
      if (filterOptions.allManufacturer.length === 0) getFilterData()
      // eslint-disable-next-line
   }, [productType])
   /*return { filterOptions, setFilterOptions }*/
}

export default useFilter
