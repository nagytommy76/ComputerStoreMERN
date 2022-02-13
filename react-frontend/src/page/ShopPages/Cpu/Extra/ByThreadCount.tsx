import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedThreadCountRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseThreadSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByThreadCount = () => {
   const dispatch = useAppDispatch()
   const { threadCounts, selectedThreadCountRange } = useAppSelector(state => state.cpuFilter)

   const handleRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedThreadCountRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <BaseThreadSelect
         range={threadCounts}
         selectedRange={selectedThreadCountRange}
         changeRange={handleRange}
         text='Szálak száma'
         unit=' DB'
      ></BaseThreadSelect>
   )
}

export default ByThreadCount
