import { ConvertedSSDDetailsType } from '../Types'
import { SsdDetailProperties } from '../../Enums'
import { SsdCompareProduct } from '../../CompareTypes'

const useConvertSSD = () => {
   const convertSSDataToStringWithUnits = (
      helperArray: ConvertedSSDDetailsType[],
      product: SsdCompareProduct
   ) => {
      const keyValuePair = Object.entries(SsdDetailProperties)
      let obj: any = {}
      for (const [key] of keyValuePair) {
         switch (key) {
            case 'capacity':
               obj[key] = `${product.details[key]} GB`
               break
            case 'readingSpeed':
               obj[key] = `${product.details[key]} MB/s`
               break
            case 'writingSpeed':
               obj[key] = `${product.details[key]} MB/s`
               break
            case 'tbw':
               obj[key] = `${product.details[key]} TB`
               break
            case 'warranity':
               obj[key] = `${product.details[key]} hónap`
               break
            default:
               obj[key] = product.details[key as 'manufacturerPageUrl' | 'connection' | 'nandTechnology']
         }
      }
      helperArray.push(obj)
   }
   return convertSSDataToStringWithUnits
}

export default useConvertSSD
