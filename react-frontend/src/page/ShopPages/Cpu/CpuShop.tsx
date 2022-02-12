import React, { lazy } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

const BaseShop = lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const BySocket = lazy(() => import('./Extra/BySocket'))
const ByBaseFrequencyRange = lazy(() => import('./Extra/ByBaseFrequency'))

const CpuShop = () => {
   //    const dispatch = useAppDispatch()
   const { selectedSocket, selectedBaseFrequencyRange, selectedCoreCount } = useAppSelector(
      state => state.cpuFilter
   )

   const extraDispatches = (params: any) => {}

   return (
      <BaseShop productType='cpu'>
         <SideFilter
            productType='cpu'
            extraQueryParameters={`&coreCount=${selectedCoreCount}&selectedBaseFrequencyRange=${selectedBaseFrequencyRange}&selectedSocket=${selectedSocket}`}
            extraDispatches={extraDispatches}
            /*sideEffectTrigger={selectedFrequencyRange}*/
         >
            <BySocket />
            <ByBaseFrequencyRange />
         </SideFilter>
      </BaseShop>
   )
}

export default CpuShop
