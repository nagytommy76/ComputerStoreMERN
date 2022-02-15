import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedFrequencyRange } from '../../../../app/slices/Filter/MemoryFilterSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const FrequencyRange = () => {
   const { frequencyRange, selectedFrequencyRange } = useAppSelector(state => state.memoryFilter)

   return (
      <BaseFrequencySlider
         setSelectedDispatchValue={setSelectedFrequencyRange}
         range={frequencyRange}
         selectedRange={selectedFrequencyRange}
         text='Frekvencia'
      />
   )
}

export default FrequencyRange
