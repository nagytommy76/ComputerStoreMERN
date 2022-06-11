import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedReadSpeedRange } from '../../../../app/slices/Filter/SsdFilterSlice'

const BaseSlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByReadSpeed = () => {
   const { readSpeedRange, selectedReadSpeedRange } = useAppSelector(state => state.ssdFilter)
   return (
      <BaseSlider
         range={readSpeedRange}
         selectedRange={selectedReadSpeedRange}
         setSelectedDispatchValue={setSelectedReadSpeedRange}
         text='Olvasási sebesség'
         unit='MB/s'
      />
   )
}

export default ByReadSpeed
