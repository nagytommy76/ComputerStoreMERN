import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Container from '../../../SuspenseComponents/ProductCard/Container'
import { PageContainer } from '../BaseStyleForShopPage'
import { FilterTypes } from '../Vga/Vga'

const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const Cpu = () => {
   const [filterOptions, setFilterOptions] = useState<FilterTypes>({
      allManufacturer: [],
      selectedManufacturer: '',
      maxPrice: 200,
      minPrice: 0,
      orderBy: 'asc',
      selectedPrice: 0
   })
   useEffect(() => {
      axios.get('cpu/filter-data').then((filter) => {
         setFilterOptions({
            ...filterOptions,
            maxPrice: filter.data.maxPrice,
            minPrice: filter.data.minPrice,
            allManufacturer: filter.data.allManufacturers,
            selectedPrice: filter.data.minPrice
         })
      })
      axios
         .get('/cpu')
         .then((allCpu) => {
            console.log(allCpu.data)
         })
         .catch((error) => console.log(error))
      // eslint-disable-next-line
   }, [])
   return (
      <React.Suspense fallback={<Container />}>
         <PageContainer>
            <SideFilter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
         </PageContainer>
      </React.Suspense>
   )
}

export default Cpu
