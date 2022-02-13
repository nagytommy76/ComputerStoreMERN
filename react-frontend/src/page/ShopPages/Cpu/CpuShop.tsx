import React, { lazy } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
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
} from '../../../app/slices/Filter/CpuFilterSlice'

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
   const dispatch = useAppDispatch()
   const {
      selectedSocket,
      selectedBaseFrequencyRange,
      selectedTurboFrequencyRange,
      selectedCoreCountRange,
      selectedThreadCountRange,
      selectedTDPRange,
      selectedL3CacheRange,
   } = useAppSelector(state => state.cpuFilter)

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

   return (
      <BaseShop productType='cpu'>
         <SideFilter
            productType='cpu'
            extraQueryParameters={`&coreCount=${selectedCoreCountRange}&threadCount=${selectedThreadCountRange}&baseFrequencyRange=${selectedBaseFrequencyRange}&turboFrequencyRange=${selectedTurboFrequencyRange}&selectedSocket=${selectedSocket}&tdpRange=${selectedTDPRange}&l3CacheRange=${selectedL3CacheRange}`}
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
