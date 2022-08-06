import React from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { setSelectedWarranty } from '../../../../../app/slices/Filter/BaseFilterDataSlice'

const BaseSelect = React.lazy(() => import('../Base/BaseSelect'))

const ByWarranity = () => {
   const { allWarranties, selectedWarranty } = useAppSelector(state => state.filter.filterData)

   return (
      <BaseSelect
         allOption={allWarranties}
         selectedOption={selectedWarranty}
         helperText='Szűrés garancia idő szerint'
         labelText='Garancia'
         setSelectedDispatchValue={setSelectedWarranty}
         postFix=' hónap'
      ></BaseSelect>
   )
}

export default ByWarranity
