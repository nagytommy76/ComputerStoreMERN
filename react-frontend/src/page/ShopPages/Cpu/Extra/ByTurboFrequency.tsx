import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedTurboFrequencyRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const TurboFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByTurboFrequency = () => {
   const { turboFrequencyRange, selectedTurboFrequencyRange } = useAppSelector(state => state.cpuFilter)

   return (
      <TurboFrequencySlider
         setSelectedDispatchValue={setSelectedTurboFrequencyRange}
         range={turboFrequencyRange}
         selectedRange={selectedTurboFrequencyRange}
         text='Boost frekvencia (MHz)'
      />
   )
}

export default ByTurboFrequency
