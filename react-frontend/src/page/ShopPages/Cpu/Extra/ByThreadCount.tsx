import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedThreadCountRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseThreadSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByThreadCount = () => {
   const { threadCounts, selectedThreadCountRange } = useAppSelector(state => state.cpuFilter)

   return (
      <BaseThreadSelect
         setSelectedDispatchValue={setSelectedThreadCountRange}
         range={threadCounts}
         selectedRange={selectedThreadCountRange}
         text='Szálak száma'
         unit=' DB'
      ></BaseThreadSelect>
   )
}

export default ByThreadCount
