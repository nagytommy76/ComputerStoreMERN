import React from 'react'
import { useAppDispatch } from '../../../../app/hooks'
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

   const extraDispatches = (params: IncomingParamsType) => {}

   return extraDispatches
}

export default useExtraDispatch

type IncomingParamsType = {}
