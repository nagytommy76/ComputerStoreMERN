import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedL3CacheRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseL3Select = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByL3CacheRange = () => {
   const dispatch = useAppDispatch()
   const { l3CacheRange, selectedL3CacheRange } = useAppSelector(state => state.cpuFilter)

   const handleRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedL3CacheRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <BaseL3Select
         range={l3CacheRange}
         selectedRange={selectedL3CacheRange}
         changeRange={handleRange}
         text='L3 Cache'
         unit=' MB'
      ></BaseL3Select>
   )
}

export default ByL3CacheRange
