import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedCapacity } from '../../../../app/slices/Filter/MemoryFilterSlice'

const BaseCapacitySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const BySelectedCapacity = () => {
   const { selectedCapacity, allCapacities } = useAppSelector(state => state.memoryFilter)
   const dispatch = useAppDispatch()

   const handleChange = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedCapacity(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <BaseCapacitySlider
         range={allCapacities}
         selectedRange={selectedCapacity}
         changeRange={handleChange}
         text='Kapacitás'
         unit=' GB'
      />
   )
}

export default BySelectedCapacity
