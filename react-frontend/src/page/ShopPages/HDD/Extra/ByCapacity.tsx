import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedCapacityRange } from '../../../../app/slices/Filter/HddFilterSlice'

const BaseCapacitySlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByCapacity = () => {
   const capacityRange = useAppSelector(state => state.hddFilter.capacityRange)
   const selectedCapacityRange = useAppSelector(state => state.hddFilter.selectedCapacityRange)
   return (
      <BaseCapacitySlider
         range={capacityRange}
         selectedRange={selectedCapacityRange}
         setSelectedDispatchValue={setSelectedCapacityRange}
         text='Kapacitás'
         unit=' GB'
      />
   )
}

export default ByCapacity
