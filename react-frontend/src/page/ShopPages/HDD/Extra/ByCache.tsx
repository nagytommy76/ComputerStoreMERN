import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { setSelectedCacheRange } from '../../../../app/slices/Filter/HddFilterSlice'

const BaseCacheSlider = React.lazy(() => import('../../BaseComponents/SideFilter/Base/BaseSlider'))

const ByCache = () => {
   const cacheRange = useAppSelector(state => state.hddFilter.cacheRange)
   const selectedCacheRange = useAppSelector(state => state.hddFilter.selectedCacheRange)
   return (
      <BaseCacheSlider
         range={cacheRange}
         selectedRange={selectedCacheRange}
         setSelectedDispatchValue={setSelectedCacheRange}
         text='Cache'
         unit=' MB'
      />
   )
}

export default ByCache
