import React, { lazy } from 'react'
import useExtraDispatch from './Hook/useExtraDispatch'
import useExtraQuery from './Hook/useExtraQuery'

const BaseVgaShop = lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const VgaSideFilter = lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByBaseClock = lazy(() => import('./Extra/ByBaseClock'))
const ByBoostClock = lazy(() => import('./Extra/ByBoostClock'))
const ByGpuMan = lazy(() => import('./Extra/ByGpuManufacturer'))
const ByLength = lazy(() => import('./Extra/ByLength'))
const ByPciEType = lazy(() => import('./Extra/ByPciType'))
const ByTDP = lazy(() => import('./Extra/ByPowerConsumption'))
const ByVramBandwidth = lazy(() => import('./Extra/ByBandwidth'))
const ByVramCapacity = lazy(() => import('./Extra/ByCapacity'))
const ByVramType = lazy(() => import('./Extra/ByVramType'))

const VgaShop = () => {
   const extraDispatches = useExtraDispatch()
   const extraQueryParameters = useExtraQuery()
   return (
      <BaseVgaShop productType='vga'>
         <VgaSideFilter
            productType='vga'
            extraDispatches={extraDispatches}
            extraQueryParameters={extraQueryParameters}
         >
            <ByGpuMan />
            <ByPciEType />
            <ByVramType />
            <ByBaseClock />
            <ByBoostClock />
            <ByLength />
            <ByTDP />
            <ByVramBandwidth />
            <ByVramCapacity />
         </VgaSideFilter>
      </BaseVgaShop>
   )
}

export default VgaShop
