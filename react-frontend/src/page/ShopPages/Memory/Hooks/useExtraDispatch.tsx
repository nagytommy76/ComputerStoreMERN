import { useAppDispatch } from '../../../../app/hooks'
import {
   setSelectedFrequencyRange,
   setFrequencyRange,
   setAllLatencies,
   setSelectedLatency,
   setAllCapacities,
   setSelectedCapacity,
} from '../../../../app/slices/Filter/MemoryFilterSlice'

const useExtraDispatch = () => {
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
   return extraDispatches
}

export default useExtraDispatch

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
