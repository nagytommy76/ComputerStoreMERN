import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedVramType } from '../../../../app/slices/Filter/VgaFilterSlice'

const BaseVramtype = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const ByVramType = () => {
   const { vramTypes, selectedVramType } = useAppSelector(state => state.vgaFilter)

   return (
      <BaseVramtype
         setSelectedDispatchValue={setSelectedVramType}
         allOption={vramTypes}
         selectedOption={selectedVramType}
         helperText='Vram típusa'
         labelText='Vram típusa'
      ></BaseVramtype>
   )
}

export default ByVramType
