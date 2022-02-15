import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedPcie } from '../../../../app/slices/Filter/VgaFilterSlice'

const BasePciEType = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const ByPciEType = () => {
   const { pcieTypes, selectedPcie } = useAppSelector(state => state.vgaFilter)

   return (
      <BasePciEType
         setSelectedDispatchValue={setSelectedPcie}
         allOption={pcieTypes}
         selectedOption={selectedPcie}
         helperText='PCI-E típusa'
         labelText='PCI-E típusa'
      >
         <option value='all'>Összes</option>
      </BasePciEType>
   )
}

export default ByPciEType
