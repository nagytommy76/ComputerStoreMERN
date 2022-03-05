import { useAppDispatch } from '../../../../app/hooks'
import {
   setCapacityRange,
   setSelectedCapacityRange,
   setRpmRange,
   setSelectedCacheRange,
   setSelectedRpmRange,
   setCacheRange,
} from '../../../../app/slices/Filter/HddFilterSlice'

const useExtraDispatch = () => {
   const dispatch = useAppDispatch()

   const extraDispatches = (params: IncomingParamsType) => {
      const capacityRange = [params.minCapacity, params.maxCapacity]
      dispatch(setCapacityRange(capacityRange))
      dispatch(setSelectedCapacityRange(capacityRange))
      const rpmRange = [params.minRpm, params.maxRpm]
      dispatch(setRpmRange(rpmRange))
      dispatch(setSelectedRpmRange(rpmRange))
      const cacheRange = [params.minCache, params.maxCache]
      dispatch(setCacheRange(cacheRange))
      dispatch(setSelectedCacheRange(cacheRange))
   }
   return extraDispatches
}

export default useExtraDispatch

type IncomingParamsType = {
   maxPrice: number
   minPrice: number
   maxCapacity: number
   minCapacity: number
   minCache: number
   maxCache: number
   minRpm: number
   maxRpm: number
   _id: null
}
