import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedLength } from '../../../../app/slices/Filter/VgaFilterSlice'

const BaseLengthRange = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByLength = () => {
   const { lengths, selectedLength } = useAppSelector(state => state.vgaFilter)
   return (
      <BaseLengthRange
         range={lengths}
         selectedRange={selectedLength}
         setSelectedDispatchValue={setSelectedLength}
         text='Hosszúság'
         unit=' CM'
      />
   )
}

export default ByLength
