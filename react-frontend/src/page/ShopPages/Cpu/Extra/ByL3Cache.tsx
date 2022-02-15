import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedL3CacheRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseL3Select = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByL3CacheRange = () => {
   const { l3CacheRange, selectedL3CacheRange } = useAppSelector(state => state.cpuFilter)

   return (
      <BaseL3Select
         setSelectedDispatchValue={setSelectedL3CacheRange}
         range={l3CacheRange}
         selectedRange={selectedL3CacheRange}
         text='L3 Cache'
         unit=' MB'
      ></BaseL3Select>
   )
}

export default ByL3CacheRange
