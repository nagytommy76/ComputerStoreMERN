import { useAppSelector } from '../../../../app/hooks'

const useExtraQuery = () => {
   const { selectedCacheRange, selectedCapacityRange, selectedRpmRange } = useAppSelector(
      state => state.hddFilter
   )
   const extraQueryParameters = `&cacheRange=${selectedCacheRange}&capacityRange=${selectedCapacityRange}&rpmRange=${selectedRpmRange}`
   return extraQueryParameters
}

export default useExtraQuery
