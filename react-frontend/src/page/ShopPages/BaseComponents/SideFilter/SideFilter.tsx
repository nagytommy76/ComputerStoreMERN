import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import useFilter from '../../Hooks/UseFilter'
import useGetProducts from '../../Hooks/useGetProducts'
import { StyledFilter, MainTitle } from './FilterStyle'

const OrderByPrice = React.lazy(() => import('./Includes/OrderByPrice'))
const ByManufacturer = React.lazy(() => import('./Includes/ByManufacturer'))
const PriceRange = React.lazy(() => import('./Includes/PriceRange'))
const PerPage = React.lazy(() => import('./Includes/PerPage'))

const SideFilter: React.FC<Props> = ({
   productType,
   extraQueryParameters,
   extraDispatches,
   children,
   sideEffectTrigger,
}) => {
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)

   useFilter(productType, extraDispatches)
   useGetProducts(productType, sideEffectTrigger, extraQueryParameters)

   return (
      <StyledFilter isDarkTheme={isDarkTheme}>
         <MainTitle>Szűrés</MainTitle>
         <PerPage />
         <OrderByPrice />
         <ByManufacturer />
         <PriceRange />
         {children}
      </StyledFilter>
   )
}

type Props = {
   productType: string
   extraQueryParameters?: string
   extraDispatches?: (params: any) => void
   sideEffectTrigger?: any
}

export default SideFilter
