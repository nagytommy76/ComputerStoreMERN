import React from 'react'

import { useAppSelector } from '../../../../app/hooks'
import { setMemoryType } from '../../../../app/slices/Filter/MemoryFilterSlice'

const BaseTypeSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const ByMemoryType = () => {
   const memoryType = useAppSelector(state => state.memoryFilter.memoryType)

   const allMemType = ['ddr2', 'ddr3', 'ddr4', 'ddr5']
   return (
      <BaseTypeSelect
         setSelectedDispatchValue={setMemoryType}
         allOption={allMemType}
         selectedOption={memoryType}
         helperText='Memória típusa'
         labelText='Memória típusa'
      >
         <option value='all'>Összes</option>
      </BaseTypeSelect>
   )
}

export default ByMemoryType
