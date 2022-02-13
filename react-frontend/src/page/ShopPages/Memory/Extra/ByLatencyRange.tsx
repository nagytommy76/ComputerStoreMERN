import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setSelectedLatency } from '../../../../app/slices/Filter/MemoryFilterSlice'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByLatencyRange = () => {
   const dispatch = useAppDispatch()
   const { allLatencies, selectedLatency } = useAppSelector(state => state.memoryFilter)

   const changeFrequencyRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedLatency(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }

   return (
      <BaseFrequencySlider
         range={allLatencies}
         selectedRange={selectedLatency}
         changeRange={changeFrequencyRange}
         text='Késleltetés'
         unit=' CL'
      />
   )
}

export default ByLatencyRange
