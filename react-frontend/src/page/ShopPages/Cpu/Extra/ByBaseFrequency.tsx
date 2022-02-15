import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedBaseFrequencyRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const FrequencyRange = () => {
   const { selectedBaseFrequencyRange, baseFrequencyRange } = useAppSelector(state => state.cpuFilter)

   return (
      <BaseFrequencySlider
         setSelectedDispatchValue={setSelectedBaseFrequencyRange}
         range={baseFrequencyRange}
         selectedRange={selectedBaseFrequencyRange}
         text='Alap frekvencia (MHz)'
      />
   )
}

export default FrequencyRange
