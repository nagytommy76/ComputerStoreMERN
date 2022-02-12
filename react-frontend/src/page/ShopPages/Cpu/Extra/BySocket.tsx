import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedSocket } from '../../../../app/slices/Filter/CpuFilterSlice'

const BaseSocketSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const BySocket = () => {
   const { selectedSocket, allSocket } = useAppSelector(state => state.cpuFilter)
   const dispatch = useAppDispatch()

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSelectedSocket(event.target.value))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <BaseSocketSelect
         allOption={allSocket}
         selectedOption={selectedSocket}
         handleChange={handleChange}
         helperText='Foglalat'
         labelText='Foglalatok'
      >
         <option value='all'>Összes</option>
      </BaseSocketSelect>
   )
}

export default BySocket
