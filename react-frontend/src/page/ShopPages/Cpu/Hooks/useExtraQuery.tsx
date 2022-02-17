import { useAppSelector } from '../../../../app/hooks'

const useExtraQuery = () => {
   const {
      selectedSocket,
      selectedBaseFrequencyRange,
      selectedTurboFrequencyRange,
      selectedCoreCountRange,
      selectedThreadCountRange,
      selectedTDPRange,
      selectedL3CacheRange,
   } = useAppSelector(state => state.cpuFilter)

   const extraQueryParams = `&coreCount=${selectedCoreCountRange}&threadCount=${selectedThreadCountRange}&baseFrequencyRange=${selectedBaseFrequencyRange}&turboFrequencyRange=${selectedTurboFrequencyRange}&selectedSocket=${selectedSocket}&tdpRange=${selectedTDPRange}&l3CacheRange=${selectedL3CacheRange}`
   return extraQueryParams
}

export default useExtraQuery
