import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setVramCapacitiyRange } from '../../../../app/slices/Filter/VgaFilterSlice'

const BaseCapacity = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByBandwidth = () => {
   const { vramCapacitiyRange, selectedVramCapRange } = useAppSelector(state => state.vgaFilter)
   return (
      <BaseCapacity
         range={vramCapacitiyRange}
         selectedRange={selectedVramCapRange}
         setSelectedDispatchValue={setVramCapacitiyRange}
         text='Vram Kapacitás'
         unit=' GB'
      />
   )
}

export default ByBandwidth
