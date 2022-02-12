import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setSelectedFrequencyRange, setFrequencyRange } from '../../../app/slices/Filter/MemoryFilterSlice'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByMemoryType = React.lazy(() => import('./Extra/ByMemoryType'))
const BySelectedCapacity = React.lazy(() => import('./Extra/BySelectedCapacity'))
const FrequencyRange = React.lazy(() => import('./Extra/FrequencyRange'))

const MemoryShop = () => {
   const { memoryType, selectedCapacity, selectedFrequencyRange } = useAppSelector(
      state => state.memoryFilter
   )
   const dispatch = useAppDispatch()

   const extraDispatches = (params: any) => {
      const frequencyRange = [params.minFrequency, params.maxFrequency]
      dispatch(setSelectedFrequencyRange(frequencyRange))
      dispatch(setFrequencyRange(frequencyRange))
   }

   return (
      <BaseShop productType='memory'>
         <SideFilter
            productType='memory'
            extraQueryParameters={`&memoryType=${memoryType}&selectedFrequencyRange=${selectedFrequencyRange}&selectedCapacity=${selectedCapacity}`}
            extraDispatches={extraDispatches}
            sideEffectTrigger={selectedFrequencyRange}
         >
            <ByMemoryType />
            <BySelectedCapacity />
            <FrequencyRange />
         </SideFilter>
      </BaseShop>
   )
}

export default MemoryShop
