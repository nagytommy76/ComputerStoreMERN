import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedVramBandwidth } from '../../../../app/slices/Filter/VgaFilterSlice'

const BaseBandwidth = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByBandwidth = () => {
   const { vramBandwidths, selectedVramBandwidth } = useAppSelector(state => state.vgaFilter)
   return (
      <BaseBandwidth
         range={vramBandwidths}
         selectedRange={selectedVramBandwidth}
         setSelectedDispatchValue={setSelectedVramBandwidth}
         text='Vram sávszélesség'
         unit=' bit'
      />
   )
}

export default ByBandwidth
