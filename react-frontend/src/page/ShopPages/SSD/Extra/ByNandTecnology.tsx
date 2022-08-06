import React from 'react'
import { setSelectedNand } from '../../../../app/slices/Filter/SsdFilterSlice'
import { useAppSelector } from '../../../../app/hooks'

const BaseNandSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const ByNandTecnology = () => {
   const { allNand, selectedNand } = useAppSelector(state => state.ssdFilter)
   return (
      <BaseNandSelect
         allOption={allNand}
         selectedOption={selectedNand}
         setSelectedDispatchValue={setSelectedNand}
         labelText='Nand technológia'
         helperText='Szűrés NAND szerint'
      ></BaseNandSelect>
   )
}

export default ByNandTecnology
