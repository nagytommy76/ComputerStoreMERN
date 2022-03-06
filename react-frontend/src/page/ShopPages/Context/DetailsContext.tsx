import { createContext } from 'react'

const DetailsContext = createContext<DetailsContextType>({
   details: {},
   manufacturer: '',
   pictureUrls: [''],
   price: 0,
   productId: '',
   productType: '',
   type: '',
   typeCode: '',
})

export default DetailsContext

export type DetailsContextType = {
   productType: string
   details: any
   productId: string
   pictureUrls: string[]
   manufacturer: string
   price: number
   type: string
   typeCode: string
}
