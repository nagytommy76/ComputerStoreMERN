import React, { lazy } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
   setAllSockets,
   setBaseFrequencyRange,
   setSelectedBaseFrequencyRange,
   setCoreCounts,
   setSelectedCoreCountRange,
} from '../../../app/slices/Filter/CpuFilterSlice'

const BaseShop = lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const BySocket = lazy(() => import('./Extra/BySocket'))
const ByBaseFrequencyRange = lazy(() => import('./Extra/ByBaseFrequency'))
const ByCorecount = React.lazy(() => import('./Extra/ByCoreCount'))

const CpuShop = () => {
   const dispatch = useAppDispatch()
   const { selectedSocket, selectedBaseFrequencyRange, selectedCoreCountRange } = useAppSelector(
      state => state.cpuFilter
   )

   const extraDispatches = (params: IncomingParamsType) => {
      dispatch(setAllSockets(params.allSockets))
      const baseFrequencyRange = [params.minBaseFrequency, params.maxBaseFrequency]
      dispatch(setBaseFrequencyRange(baseFrequencyRange))
      dispatch(setSelectedBaseFrequencyRange(baseFrequencyRange))

      const coreCountRange = [params.minCoreCount, params.maxCoreCount]
      dispatch(setCoreCounts(coreCountRange))
      dispatch(setSelectedCoreCountRange(coreCountRange))
   }

   return (
      <BaseShop productType='cpu'>
         <SideFilter
            productType='cpu'
            extraQueryParameters={`&coreCount=${selectedCoreCountRange}&selectedBaseFrequencyRange=${selectedBaseFrequencyRange}&selectedSocket=${selectedSocket}`}
            extraDispatches={extraDispatches}
         >
            <BySocket />
            <ByBaseFrequencyRange />
            <ByCorecount />
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
