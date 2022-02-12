import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setSelectedBaseFrequencyRange } from '../../../../app/slices/Filter/CpuFilterSlice'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const FrequencyRange = () => {
   const dispatch = useAppDispatch()
   const { selectedBaseFrequencyRange, baseFrequencyRange } = useAppSelector(state => state.cpuFilter)

   const changeFrequencyRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedBaseFrequencyRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }

   return (
      <BaseFrequencySlider
         range={baseFrequencyRange}
         selectedRange={selectedBaseFrequencyRange}
         changeRange={changeFrequencyRange}
         text='Alap frekvencia (MHz)'
      />
   )
}

export default FrequencyRange
