import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setMemoryType } from '../../../../app/slices/Filter/MemoryFilterSlice'

const BaseTypeSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const ByMemoryType = () => {
   const memoryType = useAppSelector(state => state.memoryFilter.memoryType)
   const dispatch = useAppDispatch()

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setMemoryType(event.target.value))
      dispatch(setIsPriceRangeSet(true))
   }

   const allMemType = ['ddr2', 'ddr3', 'ddr4', 'ddr5']
   return (
      <BaseTypeSelect
         allOption={allMemType}
         handleChange={handleChange}
         selectedOption={memoryType}
         helperText='Memória típusa'
         labelText='Memória típusa'
      >
         <option value='all'>Összes</option>
      </BaseTypeSelect>
   )
}

export default ByMemoryType
