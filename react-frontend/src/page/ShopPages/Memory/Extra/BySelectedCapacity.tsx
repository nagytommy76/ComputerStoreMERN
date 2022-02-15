import React from 'react'

import { useAppSelector } from '../../../../app/hooks'
import { setSelectedCapacity } from '../../../../app/slices/Filter/MemoryFilterSlice'

const BaseCapacitySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const BySelectedCapacity = () => {
   const { selectedCapacity, allCapacities } = useAppSelector(state => state.memoryFilter)

   return (
      <BaseCapacitySlider
         setSelectedDispatchValue={setSelectedCapacity}
         range={allCapacities}
         selectedRange={selectedCapacity}
         text='Kapacitás'
         unit=' GB'
      />
   )
}

export default BySelectedCapacity
