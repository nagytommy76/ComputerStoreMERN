import { useAppSelector } from '../../../../app/hooks'

const useExtraQuery = () => {
   const { memoryType, selectedCapacity, selectedFrequencyRange, selectedLatency } = useAppSelector(
      state => state.memoryFilter
   )
   const extraQueryParameters = `&memoryType=${memoryType}&selectedFrequencyRange=${selectedFrequencyRange}&selectedCapacity=${selectedCapacity}&latency=${selectedLatency}`
   return extraQueryParameters
}

export default useExtraQuery
