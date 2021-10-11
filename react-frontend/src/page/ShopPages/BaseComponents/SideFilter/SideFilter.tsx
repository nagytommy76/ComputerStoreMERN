import React, { useState } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import useFilter from '../../Hooks/UseFilter'
import useGetProducts from '../../Hooks/useGetProducts'
import { StyledFilter, MainTitle } from './FilterStyle'
// import { SideFilterContext } from './Context'

const OrderByPrice = React.lazy(() => import('./Includes/OrderByPrice'))
const ByManufacturer = React.lazy(() => import('./Includes/ByManufacturer'))
const PriceRange = React.lazy(() => import('./Includes/PriceRange'))
const PerPage = React.lazy(() => import('./Includes/PerPage'))

const SideFilter: React.FC<Props> = ({ setProducts, productType }) => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const [isFilter, setIsFilter] = useState<boolean>(false)

   useFilter(productType, setIsFilter)
   useGetProducts(productType, isFilter)

   return (
      /*<SideFilterContext.Provider
         value={{
            setFilterOptions,
            filterOptions
         }}>*/
      <StyledFilter isDarkTheme={isDarkTheme}>
         <MainTitle>Szűrés</MainTitle>
         <PerPage />
         <OrderByPrice />
         <ByManufacturer />
         <PriceRange />
      </StyledFilter>
      /*</SideFilterContext.Provider>*/
   )
}

type Props = {
   setProducts?: React.Dispatch<React.SetStateAction<any>>
   productType: string
}

export default SideFilter
