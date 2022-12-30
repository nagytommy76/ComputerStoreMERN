import React from 'react'
import { CpuDetailProperties, CpuCompareProduct } from '../../CompareTypes'
import { ConvertedCPUDetailsType } from '../Types'

const UseConverCPU = () => {
   const converCPUDataToStringWithUnits = (
      helperArray: ConvertedCPUDetailsType[],
      product: CpuCompareProduct
   ) => {
      const keyValuePair = Object.entries(CpuDetailProperties)
      let obj: any = {}
      for (const [key] of keyValuePair) {
         switch (key) {
            case 'threadCount':
            case 'coreCount':
               obj[key] = `${product.details[key]} DB`
               break
            case 'baseClock':
            case 'boostClock':
               obj[key] = `${product.details[key]} MHz`
               break
            case 'l2Cache':
            case 'l3Cache':
               obj[key] = `${product.details[key]} Mb`
               break
            case 'warranity':
               obj[key] = `${product.details[key]} hónap`
               break
            case 'stockCooler':
               obj[key] = product.details[key] ? 'Van' : 'Nincs'
               break
            case 'TDP':
               obj[key] = `${product.details[key]} Watt`
               break
            default:
               obj[key] =
                  product.details[
                     key as
                        | 'architecture'
                        | 'cpuCodeName'
                        | 'integratedGraphicsName'
                        | 'manufacturerPageUrl'
                        | 'stockCoolerName'
                  ]
         }
      }
      helperArray.push(obj)
   }
   return converCPUDataToStringWithUnits
}

export default UseConverCPU
