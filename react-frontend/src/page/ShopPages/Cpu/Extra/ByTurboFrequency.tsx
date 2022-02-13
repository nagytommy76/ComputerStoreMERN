import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setSelectedTurboFrequencyRange } from '../../../../app/slices/Filter/CpuFilterSlice'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'

const TurboFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByTurboFrequency = () => {
   const dispatch = useAppDispatch()
   const { turboFrequencyRange, selectedTurboFrequencyRange } = useAppSelector(state => state.cpuFilter)

   const changeFrequencyRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedTurboFrequencyRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }

   return (
      <TurboFrequencySlider
         range={turboFrequencyRange}
         selectedRange={selectedTurboFrequencyRange}
         changeRange={changeFrequencyRange}
         text='Boost frekvencia (MHz)'
      />
   )
}

export default ByTurboFrequency
