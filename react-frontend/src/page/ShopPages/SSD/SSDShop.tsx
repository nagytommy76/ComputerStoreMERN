import React, { lazy } from 'react'
import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

const BaseShop = lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const Connection = lazy(() => import('./Extra/ByConnection'))

const SSDShop = () => {
   const extraDispatches = useExtraDispatch()
   const extraQueryParameters = useExtraQuery()
   return (
      <BaseShop productType='ssd'>
         <SideFilter
            productType='ssd'
            extraDispatches={extraDispatches}
            extraQueryParameters={extraQueryParameters}
         >
            <Connection />
         </SideFilter>
      </BaseShop>
   )
}

export default SSDShop
