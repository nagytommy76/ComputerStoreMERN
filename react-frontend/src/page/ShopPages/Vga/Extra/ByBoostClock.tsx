import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedBoostClockRange } from '../../../../app/slices/Filter/VgaFilterSlice'

const BaseFrequencySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByBoostClock = () => {
   const { boostClockRange, selectedBoostClockRange } = useAppSelector(state => state.vgaFilter)
   return (
      <BaseFrequencySlider
         range={boostClockRange}
         selectedRange={selectedBoostClockRange}
         setSelectedDispatchValue={setSelectedBoostClockRange}
         text='Boost órajel'
      />
   )
}

export default ByBoostClock
