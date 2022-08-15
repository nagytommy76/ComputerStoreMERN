import React, { ReactNode } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import useFilter from '../../Hooks/UseFilter'
import useGetProducts from '../../Hooks/useGetProducts'
import { StyledFilter, MainTitle } from './FilterStyle'

const SearchField = React.lazy(() => import('./Includes/SearchField'))
const OrderByPrice = React.lazy(() => import('./Includes/OrderByPrice'))
const ByManufacturer = React.lazy(() => import('./Includes/ByManufacturer'))
const PriceRange = React.lazy(() => import('./Includes/PriceRange'))
const PerPage = React.lazy(() => import('./Includes/PerPage'))
const ByWarranity = React.lazy(() => import('./Includes/ByWarranity'))

const SideFilter: React.FC<Props> = ({ productType, extraQueryParameters, extraDispatches, children }) => {
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)

   useFilter(productType, extraDispatches)
   useGetProducts(productType, extraQueryParameters)
   return (
      <StyledFilter isDarkTheme={isDarkTheme}>
         <MainTitle>Szűrés</MainTitle>
         <SearchField extraQueryParams={extraQueryParameters} productType={productType} />
         <PerPage />
         <OrderByPrice />
         <ByManufacturer />
         <ByWarranity />
         <PriceRange />
         {children}
      </StyledFilter>
   )
}

type Props = {
   productType: string
   extraQueryParameters?: string
   extraDispatches?: (params: any) => void
   children?: ReactNode
}

export default SideFilter
