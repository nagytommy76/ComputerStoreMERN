import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setAllMemoryTypes, setFrequencyRange } from '../../../app/slices/Filter/MemoryFilterSlice'

const BaseShop = React.lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const SideFilter = React.lazy(() => import('../BaseComponents/SideFilter/SideFilter'))
const ByMemoryType = React.lazy(() => import('./Extra/ByMemoryType'))

const MemoryShop = () => {
   const memoryType = useAppSelector(state => state.memoryFilter.memoryType)
   const dispatch = useAppDispatch()

   const extraDispatches = (allMemoryTypes: string[], frequencyRanges: number[]) => {
      dispatch(setAllMemoryTypes(allMemoryTypes))
      dispatch(setFrequencyRange(frequencyRanges))
   }

   return (
      <BaseShop productType='memory'>
         <SideFilter productType='memory' extraQueryParameters={`&memoryType=${memoryType}`} extraDispatches={extraDispatches}>
            <ByMemoryType />
         </SideFilter>
      </BaseShop>
   )
}

export default MemoryShop
