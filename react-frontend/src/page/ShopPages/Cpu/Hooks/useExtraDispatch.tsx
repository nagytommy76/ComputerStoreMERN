import { useAppDispatch } from '../../../../app/hooks'
import {
   setAllSockets,
   setBaseFrequencyRange,
   setSelectedBaseFrequencyRange,
   setCoreCounts,
   setSelectedCoreCountRange,
   setTurboFrequencyRange,
   setSelectedTurboFrequencyRange,
   setL3CacheRange,
   setSelectedL3CacheRange,
   setTDPRange,
   setSelectedTDPRange,
   setThreadCounts,
   setSelectedThreadCountRange,
} from '../../../../app/slices/Filter/CpuFilterSlice'

const useExtraDispatch = () => {
   const dispatch = useAppDispatch()
   const extraDispatches = (params: IncomingParamsType) => {
      dispatch(setAllSockets(params.allSockets))
      const baseFrequencyRange = [params.minBaseFrequency, params.maxBaseFrequency]
      const turboFrequencyRange = [params.minTurboFrequency, params.maxTurboFrequency]
      dispatch(setBaseFrequencyRange(baseFrequencyRange))
      dispatch(setSelectedBaseFrequencyRange(baseFrequencyRange))
      dispatch(setTurboFrequencyRange(turboFrequencyRange))
      dispatch(setSelectedTurboFrequencyRange(turboFrequencyRange))

      const coreCountRange = [params.minCoreCount, params.maxCoreCount]
      dispatch(setCoreCounts(coreCountRange))
      dispatch(setSelectedCoreCountRange(coreCountRange))
      const threadRange = [params.minThreadCount, params.maxThreadCount]
      dispatch(setThreadCounts(threadRange))
      dispatch(setSelectedThreadCountRange(threadRange))

      const l3CacheRange = [params.minL3Cache, params.maxL3Cache]
      dispatch(setL3CacheRange(l3CacheRange))
      dispatch(setSelectedL3CacheRange(l3CacheRange))

      const tdpRange = [params.minTDP, params.maxTDP]
      dispatch(setTDPRange(tdpRange))
      dispatch(setSelectedTDPRange(tdpRange))
   }
   return extraDispatches
}

export default useExtraDispatch

type IncomingParamsType = {
   allManufacturers: string[]
   allSockets: string[]
   maxBaseFrequency: number
   maxCoreCount: number
   maxL3Cache: number
   maxPrice: number
   maxTDP: number
   maxThreadCount: number
   maxTurboFrequency: number
   minBaseFrequency: number
   minCoreCount: number
   minL3Cache: number
   minPrice: number
   minTDP: number
   minThreadCount: number
   minTurboFrequency: number
}
