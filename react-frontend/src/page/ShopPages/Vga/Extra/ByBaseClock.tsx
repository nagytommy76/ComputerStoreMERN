import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedBaseClockRange } from '../../../../app/slices/Filter/VgaFilterSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByBaseClock = () => {
   const { baseClockRange, selectedBaseClockRange } = useAppSelector(state => state.vgaFilter)
   return (
      <BaseFrequencySlider
         range={baseClockRange}
         selectedRange={selectedBaseClockRange}
         setSelectedDispatchValue={setSelectedBaseClockRange}
         text='Alap órajel'
      />
   )
}

export default ByBaseClock
