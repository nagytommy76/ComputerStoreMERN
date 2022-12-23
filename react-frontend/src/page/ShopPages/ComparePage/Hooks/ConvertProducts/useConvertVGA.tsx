import { VgaCompareProduct, VgaDetailProperties } from '../../CompareTypes'

const useConvertVGA = () => {
   const converVGADataToStringWithUnits = (helperArray: any[], product: VgaCompareProduct) => {
      const keyValuePair = Object.entries(VgaDetailProperties)
      let obj: any = {}
      for (const [key] of keyValuePair) {
         switch (key) {
            case 'displayPort':
            case 'DVI':
            case 'HDMI':
            case 'streamProcessors':
               obj[key] = `${product.details[key]} DB`
               break
            case 'gpuBaseClock':
            case 'gpuPeakClock':
               obj[key] = `${product.details[key]} MHz`
               break
            case 'length':
               obj[key] = `${product.details[key]} CM`
               break
            case 'minPowerSupply':
            case 'powerConsuption':
               obj[key] = `${product.details[key]} Watt`
               break
            case 'vramBandwidth':
               obj[key] = `${product.details[key]} bit`
               break
            case 'vramCapacity':
               obj[key] = `${product.details[key]} GB`
               break
            case 'vramSpeed':
               obj[key] = `${product.details[key]} GB/s`
               break
            case 'warranity':
               obj[key] = `${product.details[key]} hónap`
               break
            default:
               obj[key] =
                  product.details[
                     key as 'vramType' | 'powerPin' | 'gpuManufacturer' | 'manufacturerPageUrl' | 'pcieType'
                  ]
         }
      }
      helperArray.push(obj)
   }
   return converVGADataToStringWithUnits
}

export default useConvertVGA
