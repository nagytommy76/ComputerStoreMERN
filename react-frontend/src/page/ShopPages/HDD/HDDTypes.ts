import { BaseProductType } from '../BaseTypes'

export type HDDProductType = BaseProductType & {
   details: HDDDetailsType
}

export type HDDDetailsType = {
   sataType: number
   sizeInCol: number
   capacity: number
   rpm: number
   cache: number
   warranity: number
   description?: string
   manufacturerPageUrl?: string
}
