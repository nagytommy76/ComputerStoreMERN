import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../../app/hooks'
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
} from '../../../../app/slices/Filter/VgaFilterSlice'

const useExtraDispatch = () => {
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

   const extraQueryParameters = `
       
   `

   const extraDispatches = (params: IncomingParamsType) => {}
   return { extraDispatches, extraQueryParameters }
}

export default useExtraDispatch

type IncomingParamsType = {}
