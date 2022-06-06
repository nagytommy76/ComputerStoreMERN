import { useAppSelector } from '../../../../app/hooks'

const useExtraQuery = () => {
   const {
      selectedCapacityRange,
      selectedConnection,
      selectedNand,
      selectedReadSpeedRange,
      selectedWritingSpeedRange,
      selectedSize,
      selectedTBW,
   } = useAppSelector(state => state.ssdFilter)
   const extraQueryParameters = `&capacityRange=${selectedCapacityRange}&connection=${selectedConnection}&nand=${selectedNand}&readSpeedRange=${selectedReadSpeedRange}&writingSpeedRange=${selectedWritingSpeedRange}&size=${selectedSize}&tbw=${selectedTBW}`
   return extraQueryParameters
}

export default useExtraQuery
