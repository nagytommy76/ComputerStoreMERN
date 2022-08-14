import React from 'react'
import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByMemoryType = React.lazy(() => import('./Extra/ByMemoryType'))
const BySelectedCapacity = React.lazy(() => import('./Extra/BySelectedCapacity'))
const FrequencyRange = React.lazy(() => import('./Extra/FrequencyRange'))
const ByLatencyRange = React.lazy(() => import('./Extra/ByLatencyRange'))

const MemoryShop = () => {
   const extraDispatches = useExtraDispatch()
   const extraQueryParams = useExtraQuery()
   return (
      <BaseShop productName='Memória' productType='memory'>
         <SideFilter
            productType='memory'
            extraQueryParameters={extraQueryParams}
            extraDispatches={extraDispatches}
         >
            <ByMemoryType />
            <BySelectedCapacity />
            <FrequencyRange />
            <ByLatencyRange />
         </SideFilter>
      </BaseShop>
   )
}

export default MemoryShop
