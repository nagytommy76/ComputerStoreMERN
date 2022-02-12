import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedCapacity } from '../../../../app/slices/Filter/MemoryFilterSlice'

const BaseCapacitySelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const BySelectedCapacity = () => {
   const selectedCapacity = useAppSelector(state => state.memoryFilter.selectedCapacity)
   const dispatch = useAppDispatch()

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSelectedCapacity(parseInt(event.target.value)))
      dispatch(setIsPriceRangeSet(true))
   }
   const allCapacities = [2, 4, 8, 16, 32, 64, 128]
   return (
      <BaseCapacitySelect
         allOption={allCapacities}
         selectedOption={selectedCapacity}
         handleChange={handleChange}
         labelText='Kapacitás'
         helperText='Kapacitás szerint'
         postFix='GB'
      >
         <option value='0'>Összes</option>
      </BaseCapacitySelect>
   )
}

export default BySelectedCapacity
