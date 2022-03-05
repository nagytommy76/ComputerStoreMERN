import React from 'react'
import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByCapacityRange = React.lazy(() => import('./Extra/ByCapacity'))
const ByRpmRange = React.lazy(() => import('./Extra/ByRpmRange'))
const ByCacheRange = React.lazy(() => import('./Extra/ByCache'))

const HDDShop = () => {
   const extraDispatches = useExtraDispatch()
   const extraQueryParams = useExtraQuery()
   return (
      <BaseShop productType='hdd'>
         <SideFilter
            productType='hdd'
            extraDispatches={extraDispatches}
            extraQueryParameters={extraQueryParams}
         >
            <ByCapacityRange />
            <ByRpmRange />
            <ByCacheRange />
         </SideFilter>
      </BaseShop>
   )
}

export default HDDShop
