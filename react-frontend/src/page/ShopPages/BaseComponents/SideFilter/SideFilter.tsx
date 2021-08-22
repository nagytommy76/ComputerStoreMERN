import axios from 'axios'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { FilterTypes } from '../../Vga/Vga'
import { StyledFilter, MainTitle } from './FilterStyle'

const OrderByPrice = React.lazy(() => import('./Includes/OrderByPrice'))
const ByManufacturer = React.lazy(() => import('./Includes/ByManufacturer'))
const PriceRange = React.lazy(() => import('./Includes/PriceRange'))
const PerPage = React.lazy(() => import('./Includes/PerPage'))

const SideFilter: React.FC<Props> = ({ filterOptions, setFilterOptions }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   useEffect(() => {
      axios.get(`/vga/filter-data`).then((filterData) => {
         setFilterOptions({
            ...filterOptions,
            maxPrice: filterData.data.maxPrice,
            minPrice: filterData.data.minPrice,
            allManufacturer: filterData.data.allManufacturers,
            selectedPrice: filterData.data.minPrice
         })
      })
      // eslint-disable-next-line
   }, [])
   return (
      <StyledFilter isDarkTheme={isDarkTheme}>
         <MainTitle>Szűrés</MainTitle>
         <PerPage />
         <OrderByPrice filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
         <ByManufacturer filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
         <PriceRange filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      </StyledFilter>
   )
}

type Props = {
   filterOptions: FilterTypes
   setFilterOptions: React.Dispatch<React.SetStateAction<FilterTypes>>
}

export default SideFilter
