import { ConvertedHDDDetailsType } from '../Types'
import { HddCompareProduct } from '../../CompareTypes'
import { HddDetailProperties } from '../../Enums'

const useConvertHDD = () => {
   const converHDDDataToStringWithUnits = (
      helperArray: ConvertedHDDDetailsType[],
      product: HddCompareProduct
   ) => {
      const keyValuePair = Object.entries(HddDetailProperties)
      let obj: any = {}
      for (const [key] of keyValuePair) {
         switch (key) {
            case 'capacity':
               obj[key] = `${product.details[key]} GB`
               break
            case 'rpm':
               obj[key] = `${product.details[key]} rpm`
               break
            case 'sataType':
               obj[key] = `SATA ${product.details[key]}`
               break
            case 'sizeInCol':
               obj[key] = `${product.details[key]} Col`
               break
            case 'cache':
               obj[key] = `${product.details[key]} Mb`
               break
            case 'warranity':
               obj[key] = `${product.details[key]} hónap`
               break
            default:
               obj[key] = product.details[key as 'manufacturerPageUrl']
         }
      }
      helperArray.push(obj)
   }
   return converHDDDataToStringWithUnits
}

export default useConvertHDD
