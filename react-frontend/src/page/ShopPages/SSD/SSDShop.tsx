import React, { lazy } from 'react'
import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

const BaseShop = lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByConnection = lazy(() => import('./Extra/ByConnection'))
const ByCapacity = lazy(() => import('./Extra/ByCapacity'))
const ByNandTecnology = lazy(() => import('./Extra/ByNandTecnology'))
const BySize = lazy(() => import('./Extra/BySize'))

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
            <ByConnection />
            <ByCapacity />
            <ByNandTecnology />
            <BySize />
         </SideFilter>
      </BaseShop>
   )
}

export default SSDShop
