import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedCoreCountRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseCoreSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByCoreCount = () => {
   const { coreCounts, selectedCoreCountRange } = useAppSelector(state => state.cpuFilter)

   return (
      <BaseCoreSelect
         setSelectedDispatchValue={setSelectedCoreCountRange}
         range={coreCounts}
         selectedRange={selectedCoreCountRange}
         text='Magok száma'
         unit=' DB'
      ></BaseCoreSelect>
   )
}

export default ByCoreCount
