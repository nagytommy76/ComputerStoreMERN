import React from 'react'
import { useAppSelector } from '../../../../app/hooks'

const useExtraQuery = () => {
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
         &baseClock=${selectedBaseClockRange}&boostClock=${selectedBoostClockRange}&gpuManufacturer=${selectedGpuMan}&length=${selectedLength}&pciType=${selectedPcie}&tdp=${selectedPowerConsuption}&vramBandwidth=${selectedVramBandwidth}&vramCapacity=${selectedVramCapRange}&vramType=${selectedVramType}
     `
   return extraQueryParameters
}

export default useExtraQuery
