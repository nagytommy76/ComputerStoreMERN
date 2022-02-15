import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedSocket } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseGpuManufacturerSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const ByGpuManufacturerSelect = () => {
   const { gpuManufacturers, selectedGpuMan } = useAppSelector(state => state.vgaFilter)

   return (
      <BaseGpuManufacturerSelect
         setSelectedDispatchValue={setSelectedSocket}
         allOption={gpuManufacturers}
         selectedOption={selectedGpuMan}
         helperText='GPU gyártó'
         labelText='GPU gyártó'
      >
         <option value='all'>Összes</option>
      </BaseGpuManufacturerSelect>
   )
}

export default ByGpuManufacturerSelect
