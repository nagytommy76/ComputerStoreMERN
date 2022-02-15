import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedLatency } from '../../../../app/slices/Filter/MemoryFilterSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByLatencyRange = () => {
   const { allLatencies, selectedLatency } = useAppSelector(state => state.memoryFilter)

   return (
      <BaseFrequencySlider
         setSelectedDispatchValue={setSelectedLatency}
         range={allLatencies}
         selectedRange={selectedLatency}
         text='Késleltetés'
         unit=' CL'
      />
   )
}

export default ByLatencyRange
