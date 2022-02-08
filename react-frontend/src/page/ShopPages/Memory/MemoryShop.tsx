import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
   setAllCapacities,
   setAllMemoryTypes,
   setFrequencyRange,
} from '../../../app/slices/Filter/MemoryFilterSlice'
import { ExtraDispatchesParameterType } from './MemoryTypes'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByMemoryType = React.lazy(() => import('./Extra/ByMemoryType'))
const BySelectedCapacity = React.lazy(() => import('./Extra/BySelectedCapacity'))

const MemoryShop = () => {
   const { memoryType, selectedCapacity, selectedFrequency } = useAppSelector(state => state.memoryFilter)
   const dispatch = useAppDispatch()

   const extraDispatches = (params: ExtraDispatchesParameterType) => {
      dispatch(setAllMemoryTypes(params.allMemoryTypes))
      dispatch(setFrequencyRange(params.frequencyRanges))
      dispatch(setAllCapacities(params.allCapacities))
   }

   return (
      <BaseShop productType='memory'>
         <SideFilter
            productType='memory'
            extraQueryParameters={`&memoryType=${memoryType}&selectedFrequency=${selectedFrequency}&selectedCapacity=${selectedCapacity}`}
            extraDispatches={extraDispatches}
         >
            <ByMemoryType />
            <BySelectedCapacity />
         </SideFilter>
      </BaseShop>
   )
}

export default MemoryShop
