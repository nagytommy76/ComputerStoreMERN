import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedWritingSpeedRange } from '../../../../app/slices/Filter/SsdFilterSlice'

const BaseSlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByWriteSpeed = () => {
   const { writingSpeedRange, selectedWritingSpeedRange } = useAppSelector(state => state.ssdFilter)
   return (
      <BaseSlider
         range={writingSpeedRange}
         selectedRange={selectedWritingSpeedRange}
         setSelectedDispatchValue={setSelectedWritingSpeedRange}
         text='Írási sebesség'
         unit='MB/s'
      />
   )
}

export default ByWriteSpeed
