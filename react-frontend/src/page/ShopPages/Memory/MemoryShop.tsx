import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
   setSelectedFrequencyRange,
   setFrequencyRange,
   setAllLatencies,
   setSelectedLatency,
   setAllCapacities,
   setSelectedCapacity,
} from '../../../app/slices/Filter/MemoryFilterSlice'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const ByMemoryType = React.lazy(() => import('./Extra/ByMemoryType'))
const BySelectedCapacity = React.lazy(() => import('./Extra/BySelectedCapacity'))
const FrequencyRange = React.lazy(() => import('./Extra/FrequencyRange'))
const ByLatencyRange = React.lazy(() => import('./Extra/ByLatencyRange'))

const MemoryShop = () => {
   const { memoryType, selectedCapacity, selectedFrequencyRange, selectedLatency } = useAppSelector(
      state => state.memoryFilter
   )
   const dispatch = useAppDispatch()

   const extraDispatches = (params: IncomingParamsType) => {
      const frequencyRange = [params.minFrequency, params.maxFrequency]
      dispatch(setSelectedFrequencyRange(frequencyRange))
      dispatch(setFrequencyRange(frequencyRange))

      const latencyRange = [params.minLatency, params.maxLatency]
      dispatch(setAllLatencies(latencyRange))
      dispatch(setSelectedLatency(latencyRange))

      dispatch(setAllCapacities(params.capacities))
      dispatch(setSelectedCapacity(params.capacities))
   }

   return (
      <BaseShop productType='memory'>
         <SideFilter
            productType='memory'
            extraQueryParameters={`&memoryType=${memoryType}&selectedFrequencyRange=${selectedFrequencyRange}&selectedCapacity=${selectedCapacity}&latency=${selectedLatency}`}
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

type IncomingParamsType = {
   allManufacturers: string[]
   capacities: number[]
   maxFrequency: number
   maxLatency: number
   maxPrice: number
   minFrequency: number
   minLatency: number
   minPrice: number
   _id: null
}
