import React, { lazy } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

const BaseVgaShop = lazy(() => import('../BaseComponents/BaseShopPage/BaseShop'))
const VgaSideFilter = lazy(() => import('../BaseComponents/SideFilter/SideFilter'))

const VgaShop = () => {
   const dispatch = useAppDispatch()
   const {
      selectedBaseClockRange,
      selectedBoostClockRange,
      selectedGpuMan,
      selectedLength,
      selectedPcie,
      selectedPowerConsuption,
      selectedVramBandwidth,
      selectedVramCapRange,
      selectedVramType,
   } = useAppSelector(state => state.vgaFilter)
   return (
      <BaseVgaShop productType='vga'>
         <VgaSideFilter productType='vga'></VgaSideFilter>
      </BaseVgaShop>
   )
}

export default VgaShop
