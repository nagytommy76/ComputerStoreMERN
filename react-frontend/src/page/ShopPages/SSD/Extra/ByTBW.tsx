import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedTBW } from '../../../../app/slices/Filter/SsdFilterSlice'

const BaseSlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByTBW = () => {
   const { allTBW, selectedTBW } = useAppSelector(state => state.ssdFilter)
   return (
      <BaseSlider
         range={allTBW}
         selectedRange={selectedTBW}
         setSelectedDispatchValue={setSelectedTBW}
         text='Írási mennyiség (TBW)'
         unit='TB'
      />
   )
}

export default ByTBW
