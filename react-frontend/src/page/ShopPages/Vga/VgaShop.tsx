import React, { lazy } from 'react'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import {
   setBaseClockRange,
   setBoostClockRange,
   setGpuManufacturers,
   setLengths,
   setPcieTypes,
   setPowerConsuptions,
   setSelectedBaseClockRange,
   setSelectedBoostClockRange,
   setSelectedGpuManufacturer,
   setSelectedLength,
   setSelectedPcie,
   setSelectedPowerConsuption,
   setSelectedVramBandwidth,
   setSelectedVramCapRange,
   setSelectedVramType,
   setVramBandwidths,
   setVramCapacitiyRange,
   setVramTypes,
} from '../../../app/slices/Filter/VgaFilterSlice'

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

   const extraDispatches = (params: IncomingParamsType) => {}

   return (
      <BaseVgaShop productType='vga'>
         <VgaSideFilter
            productType='vga'
            extraDispatches={extraDispatches}
            extraQueryParameters={``}
         ></VgaSideFilter>
      </BaseVgaShop>
   )
}

export default VgaShop

type IncomingParamsType = {}
