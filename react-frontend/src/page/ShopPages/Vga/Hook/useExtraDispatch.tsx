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
   setSelectedLength,
   setSelectedPowerConsuption,
   setSelectedVramBandwidth,
   setSelectedVramCapRange,
   setVramBandwidths,
   setVramCapacitiyRange,
   setVramTypes,
} from '../../../../app/slices/Filter/VgaFilterSlice'

const useExtraDispatch = () => {
   const dispatch = useAppDispatch()

   const extraDispatches = (params: IncomingParamsType) => {
      dispatch(setGpuManufacturers(params.gpuManufacturer))
      dispatch(setPcieTypes(params.pciType))
      dispatch(setVramTypes(params.vramType))

      const baseClockRange = [params.minBaseClock, params.maxBaseClock]
      dispatch(setBaseClockRange(baseClockRange))
      dispatch(setSelectedBaseClockRange(baseClockRange))

      const boostClockRange = [params.minBoostClock, params.maxBoostClock]
      dispatch(setBoostClockRange(boostClockRange))
      dispatch(setSelectedBoostClockRange(boostClockRange))

      const lengthRange = [params.minLength, params.maxLength]
      dispatch(setLengths(lengthRange))
      dispatch(setSelectedLength(lengthRange))

      const TDPRange = [params.minTdp, params.maxTdp]
      dispatch(setPowerConsuptions(TDPRange))
      dispatch(setSelectedPowerConsuption(TDPRange))

      const vramBandwidthRange = [params.minVramBandwidth, params.maxVramBandwidth]
      dispatch(setVramBandwidths(vramBandwidthRange))
      dispatch(setSelectedVramBandwidth(vramBandwidthRange))

      const vramCapacityRange = [params.minVramCapacity, params.maxVramCapacity]
      dispatch(setVramCapacitiyRange(vramCapacityRange))
      dispatch(setSelectedVramCapRange(vramCapacityRange))
   }

   return extraDispatches
}

export default useExtraDispatch

type IncomingParamsType = {
   minBaseClock: number
   maxBaseClock: number
   minBoostClock: number
   maxBoostClock: number
   gpuManufacturer: string[]
   minLength: number
   maxLength: number
   pciType: string[]
   minTdp: number
   maxTdp: number
   minVramBandwidth: number
   maxVramBandwidth: number
   minVramCapacity: number
   maxVramCapacity: number
   vramType: string[]
}
