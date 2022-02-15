import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedTDPRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseTDPSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByTDPRange = () => {
   const { tdpRange, selectedTDPRange } = useAppSelector(state => state.cpuFilter)

   return (
      <BaseTDPSelect
         setSelectedDispatchValue={setSelectedTDPRange}
         range={tdpRange}
         selectedRange={selectedTDPRange}
         text='Fogyasztás'
         unit=' Watt'
      ></BaseTDPSelect>
   )
}

export default ByTDPRange
