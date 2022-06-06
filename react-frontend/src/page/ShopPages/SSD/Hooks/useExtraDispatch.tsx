import { useAppDispatch } from '../../../../app/hooks'
import {
   setAllConnections,
   setAllNand,
   setAllSizes,
   setAllTBW,
   setSelectedTBW,
   setCapacityRange,
   setSelectedCapacityRange,
   setReadSpeedRange,
   setSelectedReadSpeedRange,
   setWritingSpeedRange,
   setSelectedWritingSpeedRange,
} from '../../../../app/slices/Filter/SsdFilterSlice'

const useExtraDispatch = () => {
   const dispatch = useAppDispatch()

   const extraDispatches = (params: IncomingParamsType) => {
      dispatch(setAllConnections(params.allConnection))
      dispatch(setAllNand(params.allNand))
      dispatch(setAllSizes(params.allSizes))

      const capacityRange = [params.minCapacity, params.maxCapacity]
      dispatch(setCapacityRange(capacityRange))
      dispatch(setSelectedCapacityRange(capacityRange))

      const readSpeedRange = [params.minReadSpeed, params.maxReadSpeed]
      dispatch(setReadSpeedRange(readSpeedRange))
      dispatch(setSelectedReadSpeedRange(readSpeedRange))
      const writingSpeedRange = [params.minWriteSpeed, params.maxWriteSpeed]
      dispatch(setWritingSpeedRange(writingSpeedRange))
      dispatch(setSelectedWritingSpeedRange(writingSpeedRange))

      const tbwRange = [params.minTBW, params.maxTBW]
      dispatch(setAllTBW(tbwRange))
      dispatch(setSelectedTBW(tbwRange))
   }
   return extraDispatches
}

export default useExtraDispatch

type IncomingParamsType = {
   allConnection: string[]
   allSizes: string[]

   minCapacity: number
   maxCapacity: number

   minReadSpeed: number
   maxReadSpeed: number
   minWriteSpeed: number
   maxWriteSpeed: number

   allNand: string[]
   minTBW: number
   maxTBW: number
}
