import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setSelectedFrequencyRange } from '../../../../app/slices/Filter/MemoryFilterSlice'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const FrequencyRange = () => {
   const dispatch = useAppDispatch()
   const { frequencyRange, selectedFrequencyRange } = useAppSelector(state => state.memoryFilter)

   const changeFrequencyRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedFrequencyRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }

   return (
      <BaseFrequencySlider
         range={frequencyRange}
         selectedRange={selectedFrequencyRange}
         changeRange={changeFrequencyRange}
         text='Frekvencia'
      />
   )
}

export default FrequencyRange
