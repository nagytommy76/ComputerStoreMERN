import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedTDPRange } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseTDPSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByTDPRange = () => {
   const dispatch = useAppDispatch()
   const { tdpRange, selectedTDPRange } = useAppSelector(state => state.cpuFilter)

   const handleRange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedTDPRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <BaseTDPSelect
         range={tdpRange}
         selectedRange={selectedTDPRange}
         changeRange={handleRange}
         text='Fogyasztás'
         unit=' Watt'
      ></BaseTDPSelect>
   )
}

export default ByTDPRange
