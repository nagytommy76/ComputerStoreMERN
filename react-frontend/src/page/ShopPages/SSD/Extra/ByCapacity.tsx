import React from 'react'
import { setSelectedCapacityRange } from '../../../../app/slices/Filter/SsdFilterSlice'
import { useAppSelector } from '../../../../app/hooks'

const BaseSlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByCapacity = () => {
   const { capacityRange, selectedCapacityRange } = useAppSelector(state => state.ssdFilter)
   return (
      <BaseSlider
         range={capacityRange}
         selectedRange={selectedCapacityRange}
         setSelectedDispatchValue={setSelectedCapacityRange}
         unit='GB'
         text='Kapacitás'
      />
   )
}

export default ByCapacity
