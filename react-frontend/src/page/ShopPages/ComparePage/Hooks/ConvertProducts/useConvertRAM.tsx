import { RamCompareProduct } from '../../CompareTypes'
import { ConvertedRAMDetailsType } from '../Types'
import { RamDetailProperties } from '../../Enums'

const useConvertRAM = () => {
   const converCPUDataToStringWithUnits = (
      helperArray: ConvertedRAMDetailsType[],
      product: RamCompareProduct
   ) => {
      const keyValuePair = Object.entries(RamDetailProperties)
      let obj: any = {}
      for (const [key] of keyValuePair) {
         switch (key) {
            case 'capacity':
               obj[key] = `${product.details[key]} GB`
               break
            case 'frequency':
               obj[key] = `${product.details[key]} MHz`
               break
            case 'moduleNumber':
               obj[key] = `${product.details[key]} DB`
               break
            case 'voltage':
               obj[key] = `${product.details[key]} Volt`
               break
            case 'warranity':
               obj[key] = `${product.details[key]} hónap`
               break
            default:
               obj[key] = product.details[key as 'memoryType' | 'manufacturerPageUrl' | 'latency']
         }
      }
      helperArray.push(obj)
   }
   return converCPUDataToStringWithUnits
}

export default useConvertRAM
