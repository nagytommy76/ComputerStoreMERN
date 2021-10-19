import React, { useState } from 'react'
import { useAppSelector } from '../../../../app/hooks'
// import useFilter from '../../Hooks/UseFilter'
import { useFilterAndProduct } from '../../Hooks/useFilterAndProduct'
// import useGetProducts from '../../Hooks/useGetProducts'
import { StyledFilter, MainTitle } from './FilterStyle'
// import { SideFilterContext } from './Context'

const OrderByPrice = React.lazy(() => import('./Includes/OrderByPrice'))
const ByManufacturer = React.lazy(() => import('./Includes/ByManufacturer'))
const PriceRange = React.lazy(() => import('./Includes/PriceRange'))
const PerPage = React.lazy(() => import('./Includes/PerPage'))

const SideFilter: React.FC<Props> = ({ productType }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   // const [isFilter, setIsFilter] = useState<boolean>(false)
   const [isPriceRangeSet, setIsPriceRangeSet] = useState<boolean>(false)

   // useFilter(productType, setIsFilter, setIsPriceRangeSet)
   // useGetProducts(productType, isFilter, isPriceRangeSet)
   useFilterAndProduct(productType)

   return (
      // <SideFilterContext.Provider
      //    value={{
      //       filterOptions: filters,
      //       setFilterOptions: setFilters
      //    }}>
      <StyledFilter isDarkTheme={isDarkTheme}>
         <MainTitle>Szűrés</MainTitle>
         <PerPage />
         <OrderByPrice />
         <ByManufacturer />
         <PriceRange setIsPriceRangeSet={setIsPriceRangeSet} />
      </StyledFilter>
      // </SideFilterContext.Provider>
   )
}

type Props = {
   productType: string
}

export default SideFilter
