import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedSize } from '../../../../app/slices/Filter/SsdFilterSlice'

const BaseSelect = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSelect'))

const BySize = () => {
   const { selectedSize, allSizes } = useAppSelector(state => state.ssdFilter)
   return (
      <BaseSelect
         allOption={allSizes}
         selectedOption={selectedSize}
         setSelectedDispatchValue={setSelectedSize}
         labelText='Méret'
         helperText='Szűrés méret szerint'
      ></BaseSelect>
   )
}

export default BySize
