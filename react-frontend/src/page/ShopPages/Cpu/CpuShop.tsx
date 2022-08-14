import React, { lazy } from 'react'
import useExtraDispatch from './Hooks/useExtraDispatch'
import useExtraQuery from './Hooks/useExtraQuery'

const BaseShop = lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByCoreCount = lazy(() => import('./Extra/ByCoreCount'))
const ByThreadCount = lazy(() => import('./Extra/ByThreadCount'))
const BySocket = lazy(() => import('./Extra/BySocket'))
const ByBaseFrequencyRange = lazy(() => import('./Extra/ByBaseFrequency'))
const ByTurboFrequencyRange = lazy(() => import('./Extra/ByTurboFrequency'))
const ByTDPRange = lazy(() => import('./Extra/ByTDPRange'))
const ByL3Cache = lazy(() => import('./Extra/ByL3Cache'))

const CpuShop = () => {
   const extraDispatches = useExtraDispatch()
   const extraQueryParams = useExtraQuery()
   return (
      <BaseShop productName='Processzor' productType='cpu'>
         <SideFilter
            productType='cpu'
            extraQueryParameters={extraQueryParams}
            extraDispatches={extraDispatches}
         >
            <BySocket />
            <ByCoreCount />
            <ByThreadCount />
            <ByBaseFrequencyRange />
            <ByTurboFrequencyRange />
            <ByTDPRange />
            <ByL3Cache />
         </SideFilter>
      </BaseShop>
   )
}

export default CpuShop
