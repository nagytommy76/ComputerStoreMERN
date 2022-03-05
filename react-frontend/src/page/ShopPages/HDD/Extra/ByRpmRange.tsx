import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setRpmRange } from '../../../../app/slices/Filter/HddFilterSlice'

const BaseRpmSlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByRpmRange = () => {
   const rpmRange = useAppSelector(state => state.hddFilter.rpmRange)
   const selectedRpmRange = useAppSelector(state => state.hddFilter.selectedRpmRange)
   return (
      <BaseRpmSlider
         range={rpmRange}
         selectedRange={selectedRpmRange}
         setSelectedDispatchValue={setRpmRange}
         text='Fordulat'
         unit=' rpm'
      />
   )
}

export default ByRpmRange
