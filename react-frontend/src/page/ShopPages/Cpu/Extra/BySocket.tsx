import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedSocket } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseSocketSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const BySocket = () => {
   const { selectedSocket, allSocket } = useAppSelector(state => state.cpuFilter)

   return (
      <BaseSocketSelect
         setSelectedDispatchValue={setSelectedSocket}
         allOption={allSocket}
         selectedOption={selectedSocket}
         helperText='Foglalat'
         labelText='Foglalatok'
      >
         <option value='all'>Összes</option>
      </BaseSocketSelect>
   )
}

export default BySocket
