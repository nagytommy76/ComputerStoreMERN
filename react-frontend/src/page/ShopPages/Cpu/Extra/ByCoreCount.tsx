import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedCoreCountRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseCoreSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByCoreCount = () => {
   const dispatch = useAppDispatch()
   const { coreCounts, selectedCoreCountRange } = useAppSelector(state => state.cpuFilter)

   const handleRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedCoreCountRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <BaseCoreSelect
         range={coreCounts}
         selectedRange={selectedCoreCountRange}
         changeRange={handleRange}
         text='Magok száma'
         unit=' DB'
      ></BaseCoreSelect>
   )
}

export default ByCoreCount
