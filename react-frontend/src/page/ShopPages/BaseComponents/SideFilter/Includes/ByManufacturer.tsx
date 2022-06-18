import React from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { setSelectedManufacturer } from '../../../../../app/slices/Filter/BaseFilterDataSlice'

const BaseSelect = React.lazy(() => import('../Base/BaseSelect'))

const ByManufacturer: React.FC = () => {
   const { allManufacturer, selectedManufacturer } = useAppSelector(state => state.filter.filterData)

   return (
      <BaseSelect
         allOption={allManufacturer}
         selectedOption={selectedManufacturer}
         helperText='Szűrés gyártók szerint'
         labelText='Gyártó'
         setSelectedDispatchValue={setSelectedManufacturer}
      >
         <option value='all'>Összes</option>
      </BaseSelect>
   )
}

export default ByManufacturer
