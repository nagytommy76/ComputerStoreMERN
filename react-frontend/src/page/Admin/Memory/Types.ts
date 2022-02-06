import { ValidationError } from '../AdminTypes'
import { MemoryProductType } from '../../ShopPages/Memory/MemoryTypes'

export type MemoryInputFieldProps = {
   product: MemoryProductType
   setProduct: React.Dispatch<React.SetStateAction<MemoryProductType>>
   validationErrors: ValidationError[]
}
