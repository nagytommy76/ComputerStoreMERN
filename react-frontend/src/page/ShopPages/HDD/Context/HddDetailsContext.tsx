import { createContext } from 'react'
import { HDDDetailsType } from '../HDDTypes'

export const HddDetailsContext = createContext<HDDDetailsType>({
   cache: 64,
   capacity: 128,
   rpm: 5400,
   sataType: 3,
   sizeInCol: 3.5,
   warranity: 24,
   description: '',
   manufacturerPageUrl: '',
})
